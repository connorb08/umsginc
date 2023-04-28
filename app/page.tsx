import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import LoginButton from "@/components/auth/LoginButton/LoginButtonLoader";
import Footer from "@/components/Footer";
// import setup from "@/db/setup_db";
import Crypto from "crypto";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: 'Home',
//   description: 'Welcome to Next.js',
// };

// export const metadata = {

//   };

// export const runtime = 'edge';

export default async function Home() {
    return (
        <>
            <main>
                <div className="flex min-h-screen flex-col items-center justify-between p-24 select-none">
                    <div className="z-10 w-full max-w-5xl items-center justify-end font-mono text-sm lg:flex">
                        <div className="flex fixed bottom-0 left-0  h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                            <Suspense fallback={<></>}>
                                {/* @ts-ignore */}
                                <LoginButton />
                            </Suspense>
                        </div>
                    </div>

                    {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]"> */}
                    <div className="relative flex place-items-center ">
                        <Image
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                            src="/umsglogo.png"
                            alt="UMSG Logo"
                            width={400}
                            height={400}
                            priority
                            draggable="false"
                        />
                    </div>

                    <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                        <a
                            href="/about"
                            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                        >
                            <h2
                                className={`${inter.className} mb-3 text-2xl font-semibold`}
                            >
                                Governance{" "}
                                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                    -&gt;
                                </span>
                            </h2>
                            <p
                                className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
                            >
                                Learn about our Organization
                            </p>
                        </a>

                        <a
                            href="/resources"
                            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
                        >
                            <h2
                                className={`${inter.className} mb-3 text-2xl font-semibold`}
                            >
                                Resources{" "}
                                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                    -&gt;
                                </span>
                            </h2>
                            <p
                                className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
                            >
                                Submit budget request or Organization update
                                form
                            </p>
                        </a>

                        <a
                            href="/announcements"
                            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                        >
                            <h2
                                className={`${inter.className} mb-3 text-2xl font-semibold`}
                            >
                                Announcements{" "}
                                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                    -&gt;
                                </span>
                            </h2>
                            <p
                                className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
                            >
                                View important announcements
                            </p>
                        </a>

                        <a
                            href="#"
                            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h2
                                className={`${inter.className} mb-3 text-2xl font-semibold`}
                            >
                                Senate{" "}
                                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                    -&gt;
                                </span>
                            </h2>
                            <p
                                className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
                            >
                                Learn more about UMSG here!
                            </p>
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
