# Bugsnag cards for Laravel Nova

Add bugsnag statistical cards for your Laravel Nova Dashboard.

## Install

You need to run the following command:
`composer require napp/nova-bugsnag`

### Add credentials

add the following to`config/services.php`

```php
'bugsnag' => [
    'api_key' => env('NOVA_BUGSNAG_API_KEY'),
    'project_id' => env('NOVA_BUGSNAG_PROJECT_ID'),
    'account_slug' => env('NOVA_BUGSNAG_ACCOUNT_SLUG'),
]
```

## Add cards to dashboard

```php
public function cards() 
{
    return [
        new \Napp\NovaBugsnag\BugsnagErrorRate(),
        new \Napp\NovaBugsnag\BugsnagCriticalErrors()
    ]
}
```