<?php

namespace App\Http\Controllers;

// Request
use Illuminate\Http\Request;

// Models
use App\Models\Park;

class ParkController extends Controller
{
    public function index(Request $request)
    {
        //$dataJSON = file_get_contents(storage_path("json/park.json"));
        //$data = json_decode($dataJSON, true);
        //dd($data)

        $parks = Park::all();

        return $parks->toJson();
    }

    public function show(Request $request, $id)
    {
        $parks = Park::find($id);

        if (!$parks) {
            return response("Not Found", 404);
        }

        return $parks->toJson();
    }
}
