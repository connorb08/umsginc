"use client";

import { SessionProvider, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

type user_type = {
    name: string;
    email: string;
    image: string;
};

export default function Header() {
    return (
        <SessionProvider>
            <HeaderComponent />
        </SessionProvider>
    );
}

const HeaderComponent = () => {
    
    const { data: session, status } = useSession();

    const [userMenuOpen, setUserMenuOpen] = useState<boolean>(false);
    const toggleUserMenu = () => {
        setUserMenuOpen(!userMenuOpen);
    };

    return (
        <nav className="absolute z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <button
                            id="toggleSidebarMobile"
                            aria-expanded="true"
                            aria-controls="sidebar"
                            className="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            onClick={() => {}}
                        >
                            <svg
                                id="toggleSidebarMobileHamburger"
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                id="toggleSidebarMobileClose"
                                className="hidden w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </button>
                        <a href="/" className="flex ml-2 md:mr-24">
                            <Image
                                className="relative h-10 w-10 mr-2"
                                src="/umsglogo.png"
                                alt="UMSG Logo"
                                width={400}
                                height={400}
                                priority
                                draggable="false"
                            />
                            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                                UMSG
                            </span>
                        </a>
                    </div>
                    <div className="flex items-center">
                        {/* <!-- Profile --> */}
                        <div className="flex items-center ml-3">
                            <div>
                                <button
                                    type="button"
                                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                    id="user-menu-button-2"
                                    aria-expanded="false"
                                    data-dropdown-toggle="dropdown-2"
                                    onClick={toggleUserMenu}
                                >
                                    <span className="sr-only">
                                        Open user menu
                                    </span>

                                    {session?.user?.image ? (
                                        <Image
                                            id="avatarButton"
                                            data-dropdown-toggle="userDropdown"
                                            data-dropdown-placement="bottom-start"
                                            className="w-10 h-10 rounded-full cursor-pointer"
                                            src={session?.user?.image || ""}
                                            alt="User dropdown"
                                            height={48}
                                            width={48}
                                        />
                                    ) : (
                                        <></>
                                    )}
                                </button>
                            </div>
                            {/* <!-- Dropdown menu --> */}
                            <div
                                className={`${
                                    userMenuOpen ? "absolute" : "hidden"
                                } top-16 right-2 z-50 mb-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
                                id="dropdown-2"
                            >
                                <div className="px-4 py-3" role="none">
                                    <p
                                        className="text-sm text-gray-900 dark:text-white"
                                        role="none"
                                    >
                                        {session?.user?.name || ""}
                                    </p>
                                    <p
                                        className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                                        role="none"
                                    >
                                        {session?.user?.email || ""}
                                    </p>
                                </div>
                                <ul className="py-1" role="none">
                                    <li>
                                        <a
                                            href="/dashboard"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                            role="menuitem"
                                        >
                                            Dashboard
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/user/settings"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                            role="menuitem"
                                        >
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                            role="menuitem"
                                            onClick={() => {signOut()}}
                                        >
                                            Sign out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
