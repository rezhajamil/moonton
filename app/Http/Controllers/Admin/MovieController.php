<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Movie\Store;
use App\Http\Requests\Admin\Movie\Update;
use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $movies=Movie::withTrashed()->orderBy('deleted_at')->get();
        return inertia('Admin/Movie/Index',compact('movies'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Admin/Movie/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Store $request)
    {
        $data=$request->validated();
        $data['thumbnail']=Storage::disk('public')->put('movies',$request->thumbnail);
        $data['slug']=Str::slug($request->name);
        $movie=Movie::create($data);
        
        return redirect()->route('admin.dashboard.movie.index')->with([
            'message'=>'Movie inserted successfully',
            'type'=>'success',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function show(movie $movie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function edit(movie $movie)
    {
        return inertia('Admin/Movie/Edit',compact('movie'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function update(Update $request, movie $movie)
    {
        $data=$request->validated();
        if($request->hasFile('thumbnail')){
            $data['thumbnail']=Storage::disk('public')->put('movies',$request->file('thumbnail'));
            Storage::disk('public')->delete($movie->thumbnail);
        }else{
            $data['thumbnail']=$movie->thumbnail;
        }
        $movie->update($data);
        return redirect()->route('admin.dashboard.movie.index')->with([
            'message'=>'Movie updated successfully',
            'type'=>'success',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function destroy(movie $movie)
    {
        $movie->delete();

        return redirect()->route('admin.dashboard.movie.index')->with([
            'message'=>'Movie deleted successfully',
            'type'=>'success',
        ]);
    }

    public function restore($movie)
    {
        Movie::withTrashed()->find($movie)->restore();

        return redirect()->route('admin.dashboard.movie.index')->with([
            'message'=>'Movie restored successfully',
            'type'=>'success',
        ]);
    }
}
