"use client";

import { useState } from "react";

export default function Bylaws() {
    const [bylaw, setBylaw] = useState<string>("");
    const [selected, setSelected] = useState(-1);

    const Constitution = () => {
        setBylaw("https://bylaws.umsg.app/constitution.pdf");
        setSelected(selected !== 0 ? 0 : -1);
    };
    const StandingRules = () => {
        setBylaw("https://bylaws.umsg.app/standing_rules.pdf");
        setSelected(selected !== 1 ? 1 : -1);
    };
    const FinancialPolicies = () => {
        setBylaw("https://bylaws.umsg.app/financial_policies.pdf");
        setSelected(selected !== 2 ? 2 : -1);
    };
    const SORP = () => {
        setBylaw("https://bylaws.umsg.app/sorp.pdf");
        setSelected(selected !== 3 ? 3 : -1);
    };
    const EmploymentPolicies = () => {
        setBylaw("https://bylaws.umsg.app/employment_policies.pdf");
        setSelected(selected !== 4 ? 4 : -1);
    };
    const FEPC = () => {
        setBylaw("https://bylaws.umsg.app/fepc_guidelines.pdf");
        setSelected(selected !== 5 ? 5 : -1);
    };

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selected_value = event.target.value;
        switch (selected_value) {
            case "-1":
                setSelected(-1);
                break;
            case "0":
                Constitution();
                break;
            case "1":
                StandingRules();
                break;
            case "2":
                FinancialPolicies();
                break;
            case "3":
                SORP();
                break;
            case "4":
                EmploymentPolicies();
                break;
            case "5":
                FEPC();
                break;
        }
    };

    return (
        <>
            <div className="sm:hidden bg-white">
                <label htmlFor="tabs" className="sr-only">
                    Select document
                </label>
                <p className="text-center">Bylaws</p>
                <select
                    onChange={handleChange}
                    id="tabs"
                    value={selected}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option value={-1}>-</option>
                    <option value={0}>Constitution</option>
                    <option value={1}>Standing Rules</option>
                    <option value={2}>Financial Policies</option>
                    <option value={3}>SORP</option>
                    <option value={4}>Employment Policies</option>
                    <option value={5}>FEPC Guidelines</option>
                </select>
            </div>

            <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                <li className="w-full">
                    <a
                        onClick={Constitution}
                        className={`inline-block cursor-pointer w-full p-4 rounded-l-lg ${
                            selected === 0
                                ? "text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
                                : "bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        }`}
                        aria-current="page"
                    >
                        Constitution
                    </a>
                </li>
                <li className="w-full">
                    <a
                        onClick={StandingRules}
                        className={`inline-block cursor-pointer w-full p-4 ${
                            selected === 1
                                ? "text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
                                : "bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        }`}
                    >
                        Standing Rules
                    </a>
                </li>
                <li className="w-full">
                    <a
                        onClick={FinancialPolicies}
                        className={`inline-block cursor-pointer w-full p-4 ${
                            selected === 2
                                ? "text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
                                : "bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        }`}
                    >
                        Financial Policies
                    </a>
                </li>
                <li className="w-full">
                    <a
                        onClick={SORP}
                        className={`inline-block cursor-pointer w-full p-4 ${
                            selected === 3
                                ? "text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
                                : "bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        }`}
                    >
                        SORP
                    </a>
                </li>
                <li className="w-full">
                    <a
                        onClick={EmploymentPolicies}
                        className={`inline-block cursor-pointer w-full p-4 ${
                            selected === 4
                                ? "text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
                                : "bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        }`}
                    >
                        Employment Policies
                    </a>
                </li>
                <li className="w-full">
                    <a
                        onClick={FEPC}
                        className={`inline-block cursor-pointer w-full p-4 rounded-r-lg ${
                            selected === 5
                                ? "text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
                                : "bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        }`}
                    >
                        FEPC Guidelines
                    </a>
                </li>
            </ul>

            <div>
                <iframe
                    key={bylaw}
                    className={`${selected === -1 ? "hidden" : ""}`}
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
