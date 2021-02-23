<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Park extends Model
{
    use HasFactory;

    protected $fillable = ["name", "localization", "description", "url"];

    protected $casts = [
        "localization" => "array",
    ];

    public function getPublishedAtAttribute()
    {
        return $this->created_at->diffForHumans();
    }
}
