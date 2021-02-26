<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Park extends Model
{
    use HasFactory;
    use Sluggable;

    protected $fillable = ["name", "localization", "description", "url"];

    protected $casts = [
        "localization" => "array",
    ];

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable(): array
    {
        return [
            "slug" => [
                "source" => "name",
                "separator" => "-",
                "unique" => true,
                "onUpdate" => true,
                "includeTrashed" => false,
            ],
        ];
    }

    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'slug';
    }

    /**
     * Readeable datetime field
     *
     * @return string
     */
    public function getPublishedAtAttribute()
    {
        return $this->created_at->diffForHumans();
    }
}
