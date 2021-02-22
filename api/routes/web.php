<?php

// Routes
use Illuminate\Support\Facades\Route;

// Laravel Welcome
Route::get("/", function () {
    return view("welcome");
});
