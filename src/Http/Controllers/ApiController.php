<?php

namespace Napp\NovaBugsnag\Http\Controllers;

use Napp\NovaBugsnag\Bugsnag;

class ApiController
{
    public function critical()
    {
        return response()->json((new Bugsnag())->getCriticalErrors());
    }
}