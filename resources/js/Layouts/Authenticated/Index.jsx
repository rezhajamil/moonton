import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Authenticated({ auth, children }) {
    return (
        <>
            <div className="hidden mx-auto max-w-screen lg:block">
                {/* START:Sidebar */}
                <Sidebar></Sidebar>
                {/* END:Sidebar */}

                {/* START:Content */}
                <div className="ml-[300px] px-[50px]">
                    <div className="py-10 flex flex-col gap-[50px]">
                        {/* START:Topbar */}
                        <Topbar
                            name={auth.user.name.toString().toUpperCase()}
                        />
                        {/* END:Topbar */}
                        <main>{children}</main>
                    </div>
                </div>
                {/* END:Content */}
            </div>
            <div className="flex w-full h-screen px-4 mx-auto bg-black lg:hidden">
                <div className="my-auto text-2xl font-medium leading-snug text-center text-white">
                    Sorry, this page only supported on 1024px screen or above
                </div>
            </div>
        </>
    );
}
