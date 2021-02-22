<?php

// Route
use Illuminate\Support\Facades\Route;

// Controllers
use App\Http\Controllers\Api\V1\ParkController as ParkV1;

// Endpoints
Route::apiResource("v1/parks", ParkV1::class)->only(["index", "show"]);
