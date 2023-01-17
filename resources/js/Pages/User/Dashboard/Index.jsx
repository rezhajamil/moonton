import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/inertia-react";
import Flickity from "react-flickity-component";

export default function Dashboard({ auth, featuredMovies, movies }) {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <Authenticated auth={auth}>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
                <title>Dashboard</title>
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {/* Movie Thumbnail */}
                    {featuredMovies.map((featuredMovie, index) => {
                        return (
                            <FeaturedMovie
                                key={featuredMovie.id}
                                name={featuredMovie.name}
                                slug={featuredMovie.slug}
                                thumbnail={featuredMovie.thumbnail}
                                rating={featuredMovie.rating}
                                category={featuredMovie.category}
                            />
                        );
                    })}
                </Flickity>
            </div>
            <div className="mt-8">
                <div className="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {movies.map((movie, index) => {
                        return (
                            <MovieCard
                                key={movie.id}
                                name={movie.name}
                                slug={movie.slug}
                                thumbnail={movie.thumbnail}
                                category={movie.category}
                            ></MovieCard>
                        );
                    })}
                </Flickity>
            </div>
        </Authenticated>
    );
}
