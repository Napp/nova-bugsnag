<?php

namespace Napp\NovaBugsnag;

use GuzzleHttp\Client;
use Illuminate\Support\Carbon;

class Bugsnag
{
    protected $client;

    protected $projectId;

    protected $accountSlug;

    /**
     * Bugsnag constructor.
     */
    public function __construct()
    {
        $this->client = new Client([
            'base_uri' => 'https://api.bugsnag.com/',
            'headers' => [
                'Accept' => 'application/json; version=2',
                'Authorization' => 'token ' . config('services.bugsnag.api_key')
            ]
        ]);

        $this->projectId = config('services.bugsnag.project_id');
        $this->accountSlug = config('services.bugsnag.account_slug');
    }

    /**
     * @param int $range
     * @return array
     */
    public function trends(int $range)
    {
        $response = $this->client->get('projects/' . $this->projectId . '/trend', [
            'query' => [
                'filters' => [
                    'event.since' => [
                        'value' => now()->subMinutes($range)->toIso8601ZuluString()
                    ]
                ],
                'resolution' => $this->getResolution($range)
            ]
        ])->getBody();

        $data = [];

        foreach (json_decode($response) as $item) {
            $label = Carbon::parse($item->to)->format('d. M Y, H:i');
            $data[$label] = $item->events_count;
        }

        return $data;
    }

    /**
     * @return array
     */
    public function getCriticalErrors()
    {
        $response = $this->client->get('projects/' . $this->projectId . '/errors', [
            'query' => [
                'sort' => 'events',
                'filters' => [
                    'event.since' => [
                        'value' => now()->subDays(30)->toIso8601ZuluString()
                    ]
                ],
            ]
        ])->getBody();

        return collect(json_decode($response, true))->filter(function($item) {
            return ($item['events'] > 100) || ($item['users'] > 10);
        })->take(4)->map(function($item) {
            if($this->accountSlug) {
                $item['browser_url'] = "https://app.bugsnag.com/{$this->accountSlug}/{$this->projectId}/errors/{$item['id']}";
            }
            return $item;
        })->toArray();
    }

    public function getCriticalErrorsJson()
    {
        return response()->json($this->getCriticalErrors());
    }

    /**
     * Get bugsnag Resolution value based on minute range
     * Available resolutions: 1m, 5m, 30m, 2h, 12h
     * @param int $minutes
     * @return string
     */
    private function getResolution(int $minutes): string
    {
        switch ($minutes) {
            case 30:
                return '1m';
            case 60:
            case 180:
                return '5m';
            case 720:
                return '30m';
            default:
                return '2h';
        }
    }

}
