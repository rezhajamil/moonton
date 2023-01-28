import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-react";

export default function Create({ auth, movie }) {
    const { data, setData, processing, errors } = useForm({
        ...movie,
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type == "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        if (data.thumbnail === movie.thumbnail) {
            delete data.thumbnail;
        }

        Inertia.post(route("admin.dashboard.movie.update", movie.id), {
            _method: "put",
            ...data,
        });
    };
    return (
        <Authenticated auth={auth}>
            <h4 className="text-xl">Update Movie : {movie.name}</h4>
            <hr className="mb-4" />

            <form onSubmit={submit}>
                <InputLabel forInput={"name"} value="Name" />
                <TextInput
                    name="name"
                    variant="outline"
                    defaultValue={movie.name}
                    handleChange={onHandleChange}
                    placeholder="Enter Name of the movie"
                    isError={errors.name}
                />
                <InputError className="mt-1" message={errors.name} />

                <InputLabel
                    forInput={"category"}
                    value="Category"
                    className={"mt-4"}
                />
                <TextInput
                    name="category"
                    variant="outline"
                    defaultValue={movie.category}
                    handleChange={onHandleChange}
                    placeholder="Enter Category of the movie"
                    isError={errors.category}
                />
                <InputError className="mt-1" message={errors.category} />

                <InputLabel
                    forInput={"video_url"}
                    value="Video URL"
                    className={"mt-4"}
                />
                <TextInput
                    type="url"
                    name="video_url"
                    variant="outline"
                    defaultValue={movie.video_url}
                    handleChange={onHandleChange}
                    placeholder="Enter Video URL of the movie"
                    isError={errors.video_url}
                />
                <InputError className="mt-1" message={errors.video_url} />

                <InputLabel
                    forInput={"rating"}
                    value="Rating"
                    className={"mt-4"}
                />
                <TextInput
                    type="number"
                    name="rating"
                    variant="outline"
                    defaultValue={movie.rating}
                    handleChange={onHandleChange}
                    placeholder="Enter Rating of the movie"
                    isError={errors.rating}
                />
                <InputError className="mt-1" message={errors.rating} />

                <InputLabel
                    forInput={"thumbnail"}
                    value="Thumbnail"
                    className={"mt-4"}
                />
                <div className="rounded-md my-1 overflow-hidden w-fit h-fit">
                    <img
                        src={`/storage/${movie.thumbnail}`}
                        alt=""
                        className="w-40"
                    />
                </div>
                <TextInput
                    type="file"
                    name="thumbnail"
                    variant="outline"
                    handleChange={onHandleChange}
                    placeholder="Enter Thumbnail of the movie"
                    className="px-0 py-2"
                    isError={errors.thumbnail}
                />
                <InputError className="mt-1" message={errors.thumbnail} />

                <div className="flex items-center px-2 mt-4 overflow-hidden rounded-md bg-alerange w-fit">
                    <InputLabel
                        forInput={"is_featured"}
                        value="Is Featured?"
                        className={"text-white mr-2 my-2"}
                    />
                    <Checkbox
                        name="is_featured"
                        variant="outline"
                        handleChange={(e) =>
                            setData("is_featured", e.target.checked)
                        }
                        checked={movie.is_featured}
                        isError={errors.is_featured}
                    />
                </div>
                <InputError className="mt-1" message={errors.is_featured} />

                <PrimaryButton
                    type="submit"
                    processing={processing}
                    className="mt-4"
                >
                    Save
                </PrimaryButton>
            </form>
        </Authenticated>
    );
}
