<?php

namespace Napp\NovaBugsnag;

use Illuminate\Http\Request;
use Laravel\Nova\Metrics\Trend;

class BugsnagErrorRate extends Trend
{
    /**
     * Calculate the value of the metric.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return mixed
     */
    public function calculate(Request $request)
    {
        $data = (new Bugsnag())->trends((int) $request->input('range'));

        return $this->result()->trend($data);
    }

    /**
     * Get the ranges available for the metric.
     *
     * @return array
     */
    public function ranges()
    {
        return [
            1440 => '24 Hrs',
            720 => '12 Hrs',
            180 => '3 Hrs',
            60 => '60 Min',
            30 => '30 Min',
        ];
    }

    /**
     * Determine for how many minutes the metric should be cached.
     *
     * @return  \DateTimeInterface|\DateInterval|float|int
     */
    public function cacheFor()
    {
        // return now()->addMinutes(5);
    }

    /**
     * Get the URI key for the metric.
     *
     * @return string
     */
    public function uriKey()
    {
        return 'bugsnag-error-rate';
    }
}
