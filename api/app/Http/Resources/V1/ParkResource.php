<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Resources\Json\JsonResource;

class ParkResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "localization" => $this->localization,
            "description" => $this->description,
            "url" => $this->url,
            "created_at" => $this->published_at,
            "type" => "resource",
        ];
    }
}
