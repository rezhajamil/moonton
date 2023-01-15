import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link } from "@inertiajs/inertia-react";

export default function Register(){
    return (
        <>
            <Head title="Sign Up"></Head>
            <div className="min-h-screen px-3 mx-auto text-white bg-black max-w-screen md:px-10">
            <div className="fixed top-[-50px] hidden lg:block">
                <img src="/images/signup-image.png"
                    className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt=""/>
            </div>
            <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                <div>
                    <img src="/images/moonton-white.svg" alt=""/>
                    <div className="my-[70px]">
                        <div className="font-semibold text-[26px] mb-3">
                            Sign Up
                        </div>
                        <p className="text-base text-[#767676] leading-7">
                            Explore our new movies and get <br/>
                            the better insight for your life
                        </p>
                    </div>
                    <form className="w-[370px]">
                        <div className="flex flex-col gap-6">
                            <div>
                                <InputLabel
                                forInput="fullname"
                                value="Full Name"
                                />
                                <TextInput
                                name="fullname"
                                defaultValue="Angga React"
                                />
                            </div>
                            <div>
                                <InputLabel
                                forInput="email"
                                value="Email Address"
                                />
                                <TextInput
                                type="email"
                                name="email"
                                defaultValue="anggaforreact@fb.com"
                                />
                            </div>
                            <div>
                                <InputLabel
                                forInput="password"
                                value="Password"
                                />
                                <TextInput
                                type="password"
                                name="password"
                                defaultValue="anggaforreact@fb.com"
                                />
                            </div>
                        </div>
                        <div className="grid space-y-[14px] mt-[30px]">
                            <PrimaryButton type="submit">
                                <span className="text-base font-semibold">
                                    Sign Up
                                </span>
                            </PrimaryButton>
                            <Link href={route('prototype.login')}>
                                <PrimaryButton type="button" variant="light-outline">
                                    <span className="text-base text-white">
                                        Sign In to My Account
                                    </span>
                                </PrimaryButton>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}