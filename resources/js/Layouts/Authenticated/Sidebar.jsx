import { Link } from "@inertiajs/inertia-react";
import MenuItem from "./MenuItem";
import { UserMenu, UserOthers } from "./MenuList";
import SubscriptionDetail from "./SubscriptionDetail";

export default function Sidebar({ auth }) {
    return (
        <>
            <aside className="fixed z-50 w-[300px] h-full">
                <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                    <a href="/">
                        <img src="/images/moonton.svg" alt="" />
                    </a>
                    <div className="links flex flex-col mt-[60px] h-full gap-[50px]">
                        <div>
                            <div className="mb-4 text-sm text-gray-1">Menu</div>
                            {UserMenu.map((menu, index) => {
                                return (
                                    <MenuItem
                                        key={index}
                                        link={menu.link}
                                        text={menu.text}
                                        icon={menu.icon}
                                        method={menu.method}
                                        isActive={
                                            menu.link &&
                                            route().current(menu.link)
                                        }
                                    />
                                );
                            })}
                        </div>
                        <div>
                            <div className="mb-4 text-gray-1 side-link">
                                Others
                            </div>
                            {UserOthers.map((menu, index) => {
                                return (
                                    <MenuItem
                                        key={index}
                                        link={menu.link}
                                        text={menu.text}
                                        icon={menu.icon}
                                        method={menu.method}
                                        isActive={
                                            menu.link &&
                                            route().current(menu.link)
                                        }
                                    />
                                );
                            })}
                        </div>

                        {auth.activePlan && (
                            <SubscriptionDetail
                                name={auth.activePlan.name}
                                isPremium={
                                    auth.activePlan.name === "For Greatest"
                                }
                                remainingActiveDays={
                                    auth.activePlan.remainingActiveDays
                                }
                                activeDays={auth.activePlan.activeDays}
                            />
                        )}
                    </div>
                </div>
            </aside>
        </>
    );
}
