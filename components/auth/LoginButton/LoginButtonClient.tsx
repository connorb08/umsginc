"use client";

import {
    signIn,
    signOut,
    useSession,
    SessionProvider,
} from "next-auth/react";
import { useState } from "react";
import Image from "next/image";

export const UserProfileButton = () => {
    return (
        <SessionProvider>
            <SignedInButton />
        </SessionProvider>
    );
};
const SignedInButton = () => {

    const { data: session } = useSession();

    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    if (session) {
        return (
            <div className="relative flex">
                <button onClick={toggleDropdown} className="relative">
                    <Image
                        id="avatarButton"
                        data-dropdown-toggle="userDropdown"
                        data-dropdown-placement="bottom-start"
                        className="w-12 h-12 rounded-full cursor-pointer"
                        src={session!.user!.image! || ""}
                        alt="User dropdown"
                        height={48}
                        width={48}
                    />
                </button>

                {dropdownOpen ? (
                    <div
                        id="userDropdown"
                        className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 fixed top-40"
                    >
                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                            <div>{session!.user!.name}</div>
                            <div className="font-medium truncate">
                                {session!.user!.email}
                            </div>
                        </div>
                        <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="avatarButton"
                        >
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Earnings
                                </a>
                            </li>
                        </ul>
                        <div className="py-1">
                            <a
                                href="#logout"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                onClick={() => signOut()}
                            >
                                Sign out
                            </a>
                        </div>
                    </div>
                ) : null}
            </div>
        );
    } else {
        return (
            <div className="relative w-12 h-12 overflow-hidden bg-gray-600 rounded-full dark:bg-gray-600">
                <svg
                    className="absolute w-14 h-14 text-gray-400 -left-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </div>
        );
    }
};

export const SignInButton = () => {
    return (
        <button
            className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={() => signIn("google")}
        >
            <svg
                className="w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 186.69 190.5"
            >
                <g transform="translate(1184.583 765.171)">
                    <path
                        clipPath="none"
                        mask="none"
                        d="M-1089.333-687.239v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z"
                        fill="#4285f4"
                    />
                    <path
                        clipPath="none"
                        mask="none"
                        d="M-1142.714-651.791l-6.972 5.337-24.679 19.223h0c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z"
                        fill="#34a853"
                    />
                    <path
                        clipPath="none"
                        mask="none"
                        d="M-1174.365-712.61c-6.494 12.815-10.217 27.276-10.217 42.689s3.723 29.874 10.217 42.689c0 .086 31.693-24.592 31.693-24.592-1.905-5.715-3.031-11.776-3.031-18.098s1.126-12.383 3.031-18.098z"
                        fill="#fbbc05"
                    />
                    <path
                        d="M-1089.333-727.244c14.028 0 26.497 4.849 36.455 14.201l27.276-27.276c-16.539-15.413-38.013-24.852-63.731-24.852-37.234 0-69.359 21.388-85.032 52.561l31.692 24.592c7.533-22.514 28.575-39.226 53.34-39.226z"
                        fill="#ea4335"
                        clipPath="none"
                        mask="none"
                    />
                </g>
            </svg>
            <span>Login</span>
        </button>
    );
};
