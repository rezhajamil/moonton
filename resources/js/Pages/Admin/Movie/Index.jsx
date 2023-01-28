import FlashMessage from "@/Components/FlashMessage";
import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Index({ auth, flashMessage, movies }) {
    const { delete: destroy, put } = useForm();
    return (
        <Authenticated auth={auth}>
            <Head title="List of Movie" />
            <Link href={route("admin.dashboard.movie.create")}>
                {flashMessage.message && (
                    <FlashMessage
                        message={flashMessage.message}
                        type={flashMessage.type}
                    />
                )}
                <PrimaryButton type="button" className="px-4 mb-8 w-fit">
                    Create Movie
                </PrimaryButton>
            </Link>
            <table className="table-fixed w-full rounded-md overflow-hidden">
                <thead className="bg-alerange font-semibold">
                    <tr>
                        <th className="py-4">Image</th>
                        <th className="py-4">Name</th>
                        <th className="py-4">Category</th>
                        <th className="py-4">Rating</th>
                        <th className="py-4" colSpan={2}>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie, index) => {
                        return (
                            <tr className="text-center" key={movie.id}>
                                <td className="px-3">
                                    <div className="rounded-md overflow-hidden">
                                        <img
                                            src={`/storage/${movie.thumbnail}`}
                                            alt={movie.slug}
                                        />
                                    </div>
                                </td>
                                <td className="px-3">{movie.name}</td>
                                <td className="px-3">{movie.category}</td>
                                <td className="px-3">
                                    {movie.rating.toFixed(1)}
                                </td>
                                <td className="px-3">
                                    <Link
                                        href={route(
                                            "admin.dashboard.movie.edit",
                                            movie.id
                                        )}
                                    >
                                        <PrimaryButton
                                            type="button"
                                            variant="warning"
                                        >
                                            Edit
                                        </PrimaryButton>
                                    </Link>
                                </td>
                                <td className="px-3">
                                    <PrimaryButton
                                        type="button"
                                        variant={
                                            movie.deleted_at
                                                ? "slate"
                                                : "danger"
                                        }
                                        onClick={() => {
                                            movie.deleted_at
                                                ? put(
                                                      route(
                                                          "admin.dashboard.movie.restore",
                                                          movie.id
                                                      )
                                                  )
                                                : destroy(
                                                      route(
                                                          "admin.dashboard.movie.destroy",
                                                          movie.id
                                                      )
                                                  );
                                        }}
                                    >
                                        {movie.deleted_at
                                            ? "Restore"
                                            : "Delete"}
                                    </PrimaryButton>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Authenticated>
    );
}
