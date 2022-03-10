<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class BeerApiController extends Controller
{
    private $link = 'https://api.punkapi.com/v2/beers?page=';

    public function getBeers(Request $request){
        $finalLink = $this->link.$request->page;
        $response = Http::get($finalLink);
        if($response->successful())
            return $response->json();
        else
            return response('Bad request',400);
    }
}
