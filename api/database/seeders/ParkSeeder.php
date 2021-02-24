<?php

namespace Database\Seeders;

// Seeder
use Illuminate\Database\Seeder;

// Models
use App\Models\Park;

class ParkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /**
         * Insert real data if is set true
         * otherwise insert fake data.
         */
        if (env("REAL_DATA", true)) {
            $parksJSON = file_get_contents("storage/json/parks.json");
            $parks = json_decode($parksJSON);

            foreach ($parks as $park) {
                Park::create([
                    "name" => $park->name,
                    "localization" => $park->localization,
                    "description" => $park->description,
                    "url" => $park->url,
                ]);
            }
        } else {
            Park::factory(20)->create();
        }
    }
}
