"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function SignInPage() {
    return (
        <main>
            <div className="md:h-screen bg-white relative flex flex-col justify-center items-center">
                <div className="md:border md:border-gray-300 bg-white md:shadow-lg shadow-none rounded p-10">
                    <div className="flex flex-col items-center space-y-3">
                        <Image
                            src="https://umaine.edu/wp-content/uploads/sites/2/2022/08/Logo-featured-image.jpg"
                            alt="umaine logo"
                            width={350}
                            height={100}
                        />
                        <span className="text-2xl font-semi-bold leading-normal">
                            Sign In
                        </span>
                        <p className="leading-normal">
                            Use your UMaine Account
                        </p>
                    </div>
                    <div className="my-8">
                        <div className="space-y-9">
                            <div className="text-sm flex justify-center items-center">
                                <button
                                    onClick={() => signIn("google")}
                                    className="py-2 px-6 rounded text-white btn bg-blue-500 hover:bg-blue-600"
                                >
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
