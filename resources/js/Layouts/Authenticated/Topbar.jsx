import { useRef, useState } from "react"

export default function Topbar(){
    const [dropdownOpen, setDropdownOpen] = useState(true);
    const dropdownTarget = useRef();

    const toggleDropdown=()=>{
        if (dropdownOpen) {
            dropdownTarget.current.classList.remove("hidden");
        } else {
            dropdownTarget.current.classList.add("hidden");
        }
        setDropdownOpen(!dropdownOpen);
    }
    
    return (
        <>
            <div className="flex items-center justify-between">
                <input type="text" className="top-search" placeholder="Search movie, cast, genre"/>
                <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-black">Welcome, Granola Sky</span>

                    <div className="relative flex flex-col gap-2 collapsible-dropdown" onClick={toggleDropdown}>
                        <div href="#!"
                            className="outline outline-2 outline-gray-2 p-[5px] rounded-full w-[60px] dropdown-button">
                            
                            <img src="/images/avatar.png" className="object-cover w-full rounded-full" alt="" />
                        </div>
                        <div className="bg-white rounded-2xl text-black font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] hidden overflow-hidden" ref={dropdownTarget}>
                            <a href="#!" className="p-4 transition-all hover:bg-sky-100">Dashboard</a>
                            <a href="#!" className="p-4 transition-all hover:bg-sky-100">Settings</a>
                            <a href="sign_in.html" className="p-4 transition-all hover:bg-sky-100">Sign Out</a>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx="true">
                {`
                    .top-search{
                        background-image: url('/icons/ic_search.svg');
                    }
                `}
            </style>
        </>
    )
}