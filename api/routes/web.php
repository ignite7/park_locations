<?php

// Routes
use Illuminate\Support\Facades\Route;

// Controllers
use App\Http\Controllers\ParkController;

// Endpoints
Route::get("/", function () {
    return view("welcome");
});

Route::get("/parks", [ParkController::class, "index"])->name("park.index");
Route::get("/parks/{id}", [ParkController::class, "show"])->name("park.store");
