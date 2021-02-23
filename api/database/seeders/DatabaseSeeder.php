<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

// Models
use App\Models\Park;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Real data park locations
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

        // Faker data park locations
        //Park::factory(20)->create();
    }
}
