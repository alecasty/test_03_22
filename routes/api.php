<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', 'App\Http\Controllers\Auth\SanctumLoginController@login')->name('api.login');
Route::get('/getBeers', 'App\Http\Controllers\BeerApiController@getBeers'
)->middleware(['auth:sanctum'])->name('api.getBeers');
Route::post('/logout', 'App\Http\Controllers\Auth\SanctumLoginController@logout')
->middleware(['auth:sanctum'])->name('api.logout');
Route::post('/check-token', 'App\Http\Controllers\Auth\SanctumLoginController@checkToken')
->middleware(['auth:sanctum'])->name('api.check-token');
