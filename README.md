# Bugsnag cards for Laravel Nova

Add bugsnag statistical cards for your Laravel Nova Dashboard.

![Example](https://raw.githubusercontent.com/Napp/nova-bugsnag/master/docs/screenshot.png)

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

## Retrieving credentials from Bugsnag

**1) Create a [Personal Access Token at Bugsnag](https://app.bugsnag.com/settings/my-account)**

![image](https://user-images.githubusercontent.com/3015394/47854994-8dbba600-dde3-11e8-90a4-4903df414fca.png)

---

**2) Retrieve company info with curl**
Replace `<your-token>` with the one created in step 1.

Run in terminal:
```bash
curl --get 'https://api.bugsnag.com/user/organizations' \
       --header 'Authorization: token <your-token>' \
       --header 'X-Version: 2'
```

Response:

```
[
  {
    "id": "<company-id>",
    "name": "Example",
    "slug": "example",

    ...
  }
]
```

Grab the company `slug` and `id`.

---

**3) Retrieve project information with curl**
Replace `<company-id>` and `<your-token>` with data from step 1 & 2.

```
curl --get 'https://api.bugsnag.com/organizations/<company-id>/projects' \
       --header 'Authorization: token <your-token>' \
       --header 'X-Version: 2'
```

Response:

```bash
[
  {
    "id": "<project-id>",
    "slug": "my-project",
    "name": "My Project",
    
    ...
  },

  ...

]
```

Search for your project name and grab the `id`.

---

**4) Fill .env**

```bash
# Nova Bugsnag
NOVA_BUGSNAG_API_KEY=<your-token>
NOVA_BUGSNAG_PROJECT_ID=<project-id>
NOVA_BUGSNAG_ACCOUNT_SLUG=<company-slug>
```
