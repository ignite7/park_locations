<?php

namespace App\Http\Controllers\Api\V1;

// Controllers
use App\Http\Controllers\Controller;

// Models
use App\Models\Park;

// Resources
use App\Http\Resources\V1\ParkResource;
use App\Http\Resources\V1\ParkCollection;

class ParkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new ParkCollection(Park::all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Park  $park
     * @return \Illuminate\Http\Response
     */
    public function show(Park $park)
    {
        return new ParkResource($park);
    }
}
