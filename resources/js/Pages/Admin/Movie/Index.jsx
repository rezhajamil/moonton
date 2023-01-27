import FlashMessage from "@/Components/FlashMessage";
import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Link } from "@inertiajs/inertia-react";

export default function Index({ auth, flashMessage }) {
    return (
        <Authenticated auth={auth}>
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
        </Authenticated>
    );
}
