import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/inertia-react";
import Flickity from "react-flickity-component";

export default function Dashboard() {
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
        <Authenticated>
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
                    {[1, 2, 3, 4, 5, 6, 7].map((i) => {
                        return (
                            <FeaturedMovie
                                key={i}
                                name={`Movie ${i}`}
                                slug={`the-movie-${i}`}
                                thumbnail="https://picsum.photos/400/400"
                                rating={i}
                                category={"Action"}
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
                    {[1, 2, 3, 4, 5, 6].map((i) => {
                        return (
                            <MovieCard
                                key={i}
                                name={`Movie ${i}`}
                                slug={`the-movie-${i}`}
                                thumbnail="https://picsum.photos/200/300"
                                category={"Action"}
                            ></MovieCard>
                        );
                    })}
                </Flickity>
            </div>
        </Authenticated>
    );
}
