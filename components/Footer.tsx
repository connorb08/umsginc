import Image from "next/image";

import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            <Image
                                src="/umsglogo.png"
                                className="h-8 mr-3"
                                alt="UMSG Logo"
                                width={32}
                                height={32}
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                UMSG Inc.
                            </span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Resources
                            </h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Financials
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Organizations
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Donate Here
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Follow us
                            </h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://www.instagram.com/umsginc"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline "
                                    >
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/company/umsginc/about/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Legal
                            </h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://www.umsgsls.org/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        Student Legal Services
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © {new Date().getFullYear()}{" "}
                        <a href="/" className="hover:underline">
                            University of Maine Student Government Inc.{" "}
                        </a>
                        All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 h-6">
                        <a
                            href="https://www.instagram.com/umsginc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                            <svg width="0" height="0">
                                <radialGradient
                                    id="ig-gradient"
                                    r="150%"
                                    cx="30%"
                                    cy="107%"
                                >
                                    <stop stopColor="#fdf497" offset="0" />
                                    <stop stopColor="#fdf497" offset="0.05" />
                                    <stop stopColor="#fd5949" offset="0.45" />
                                    <stop stopColor="#d6249f" offset="0.6" />
                                    <stop stopColor="#285AEB" offset="0.9" />
                                </radialGradient>
                            </svg>
                            <FaInstagram
                                style={{ fill: "url(#ig-gradient" }}
                                className="h-full w-full "
                            />
                            <span className="sr-only">Instagram page</span>
                        </a>
                        <a
                            href="https://www.youtube.com/@umsg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                            <FaYoutube className="h-full w-full text-[#FF0000]" />
                            <span className="sr-only">Youtube Page</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/umsginc/about/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                            <FaLinkedin className="h-full w-full text-[#0A66C2]" />
                            <span className="sr-only">Youtube Page</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
