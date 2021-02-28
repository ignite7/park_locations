<?php

namespace Database\Factories;

use App\Models\Park;
use Illuminate\Database\Eloquent\Factories\Factory;

class ParkFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Park::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "name" => $this->faker->name,
            "localization" => [
                "name" => $this->faker->city,
                "lat" => $this->faker->latitude(),
                "lng" => $this->faker->longitude(),
            ],
            "description" => $this->faker->text(1000),
            "url" => $this->faker->url(),
        ];
    }
}
