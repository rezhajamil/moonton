<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies=[
            [
                'name'=>'Movie 1',
                'slug'=>'movie-1',
                'category'=>'Action',
                'thumbnail'=>'https://picsum.photos/200/300',
                'video_url'=>'https://d33kv075lir7n3.cloudfront.net/Details+Screen+Part+Final.mp4',
                'is_featured'=>true,
            ],
            [
                'name'=>'Movie 2',
                'slug'=>'movie-2',
                'category'=>'Action',
                'thumbnail'=>'https://picsum.photos/300/300',
                'video_url'=>'https://d33kv075lir7n3.cloudfront.net/Details+Screen+Part+Final.mp4',
                'is_featured'=>false,
            ],
            [
                'name'=>'Movie 3',
                'slug'=>'movie-3',
                'category'=>'Action',
                'thumbnail'=>'https://picsum.photos/400/400',
                'video_url'=>'https://d33kv075lir7n3.cloudfront.net/Details+Screen+Part+Final.mp4',
                'is_featured'=>false,
            ],
        ];

        Movie::insert($movies);
    }
}
