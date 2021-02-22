<?php

// Route
use Illuminate\Support\Facades\Route;

// Endpoints
Route::apiResource(
    "v1/parks",
    App\Http\Controllers\Api\V1\ParkController::class
)->only(["index", "show"]);
