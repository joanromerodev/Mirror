import { useState } from "react";
import PropTypes from "prop-types";

function Filters({ totalUsers, onChange }) {
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [isLimitOpen, setIsLimitOpen] = useState(false);

    const limit = Number(localStorage.getItem("limit")) || 3;
    const sort = Number(localStorage.getItem("sort")) || -1;

    const toggleSort = () => {
        setIsSortOpen(!isSortOpen)
        if (isLimitOpen) {
            setIsLimitOpen(false)
        }
    }

    const toggleLimit = () => {
        setIsLimitOpen(!isLimitOpen)
        if (isSortOpen) {
            setIsSortOpen(false)
        }
    }

    const setLocals = (value, type) => {
        localStorage.setItem(type, value)
        onChange();
    }

    const renderLimit = () => {
        const items = [];
        items.push(
            <a key={1} onClick={() => { setLocals(1, "limit") }} className="inline-flex items-center justify-center w-full px-4 py-2 text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-white">
                {(limit === 1) ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="absolute w-4 h-4 left-2 text-purple-500 dark:text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                ) : ("")}
                1
            </a>
        )
        for (let i = 3; i <= totalUsers; i += 3) {
            items.push(
                <a key={i} onClick={() => { setLocals(i, "limit") }} className="inline-flex items-center justify-center w-full px-4 py-2 text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-white">
                    {(limit === i) ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="absolute w-4 h-4 left-2 text-purple-500 dark:text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    ) : ("")}
                    {i}
                </a>
            )
        }
        return items;
    }

    return (
        <nav className="mb-8 flex justify-center items-center">
            <ul className="inline-flex select-none shadow-lg rounded-lg py-2 px-6">
                <li className="mx-2 cursor-pointer hover:text-purple-700" onClick={toggleSort} title="Sort">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 dark:text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                    </svg>
                    {isSortOpen && (
                        <div className="absolute right-2/4 mx-2 mt-4 py-2 text-sm w-28 text-center bg-white border border-gray-300 rounded shadow-lg dark:bg-gray-800 dark:border-gray-500">
                            <a onClick={() => { setLocals(-1, "sort") }} className="px-4 py-2 inline-flex items-center justify-center w-full text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-white">
                                {(sort === -1) ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="absolute w-4 h-4 left-2 text-purple-500 dark:text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                ) : ("")}
                                Newest
                            </a>
                            <a onClick={() => { setLocals(1, "sort") }} className="inline-flex items-center justify-center w-full px-4 py-2 text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-white">
                                {(sort === 1) ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="absolute w-4 h-4 left-2 text-purple-500 dark:text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                ) : ("")}
                                Oldest
                            </a>
                        </div>
                    )}
                </li>
                <li className="mx-2 cursor-pointer hover:text-purple-700" onClick={toggleLimit} title="Show">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 dark:text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
                    </svg>
                    {isLimitOpen && (
                        <div className="absolute left-2/4 mx-2 mt-4 py-2 text-sm w-24 text-center bg-white border border-gray-300 rounded shadow-lg dark:bg-gray-800 dark:border-gray-500">
                            {renderLimit()}
                        </div>
                    )}
                </li>
            </ul>
        </nav >
    );
}

Filters.propTypes = {
    totalUsers: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Filters;