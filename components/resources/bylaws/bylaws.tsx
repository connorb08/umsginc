'use client';

import { useState } from "react";

export default function Bylaws() {
    const [bylaw, setBylaw] = useState<string>(
        "https://bylaws.umsg.app/Constitution.pdf"
    );
    const [selected, setSelected] = useState(0);

    const Constitution = () => {
        setBylaw("https://bylaws.umsg.app/constitution.pdf");
        setSelected(0);
    };
    const StandingRules = () => {
        setBylaw("https://bylaws.umsg.app/standing_rules.pdf");
        setSelected(1);
    };
    const FinancialPolicies = () => {
        setBylaw("https://bylaws.umsg.app/financial_policies.pdf");
        setSelected(2);
    };
    const SORP = () => {
        setBylaw("https://bylaws.umsg.app/sorp.pdf");
        setSelected(3);
    };
    const EmploymentPolicies = () => {
        setBylaw("https://bylaws.umsg.app/employment_policies.pdf");
        setSelected(4);
    };
    const FEPC = () => {
        setBylaw("https://bylaws.umsg.app/fepc_guidelines.pdf");
        setSelected(5);
    };

    return (
        <>
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select your country
                </label>
                <select
                    id="tabs"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option>Profile</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                </select>
            </div>

            <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                <li className="w-full">
                    <a
                        onClick={Constitution}
                        className={`inline-block cursor-pointer w-full p-4 rounded-l-lg ${(selected === 0) ? "text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" : "bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"}`}
                        aria-current="page"
                    >
                        Constitution
                    </a>
                </li>
                <li className="w-full">
                    <a
                        onClick={StandingRules}
                        className={`inline-block cursor-pointer w-full p-4 ${(selected === 1) ? "text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" : "bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"}`}
                    >
                        Standing Rules
                    </a>
                </li>
                <li className="w-full">
                    <a
                        onClick={FinancialPolicies}
                        className={`inline-block cursor-pointer w-full p-4 ${(selected === 2) ? "text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" : "bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"}`}
                    >
                        Financial Policies
                    </a>
                </li>
                <li className="w-full">
                    <a
                        onClick={SORP}
                        className={`inline-block cursor-pointer w-full p-4 ${(selected === 3) ? "text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" : "bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"}`}
                    >
                        SORP
                    </a>
                </li>
                <li className="w-full">
                    <a
                        onClick={EmploymentPolicies}
                        className={`inline-block cursor-pointer w-full p-4 ${(selected === 4) ? "text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" : "bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"}`}
                    >
                        Employment Policies
                    </a>
                </li>
                <li className="w-full">
                    <a
                        onClick={FEPC}
                        className={`inline-block cursor-pointer w-full p-4 rounded-r-lg ${(selected === 5) ? "text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" : "bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"}`}
                    >
                        FEPC Guidelines
                    </a>
                </li>
            </ul>

            <div>
                <iframe
                    id="bylaw_viewer"
                    referrerPolicy="same-origin"
                    allow="fullscreen"
                    title="Bylaws"
                    width="100%"
                    height="800"
                    src={bylaw}
                />
            </div>
        </>
    );
}
