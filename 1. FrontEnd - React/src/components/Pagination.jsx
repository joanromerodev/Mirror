import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function Pagination({ users, onChange }) {
    const { total, limit } = users.data;
    const [currentPage, setCurrentPage] = useState((localStorage.getItem("lastPage")) ? Number(localStorage.getItem("lastPage")) : 1);
    const [visiblePages, setVisiblePages] = useState(3);
    // eslint-disable-next-line no-unused-vars
    const [fromPage, setFromPage] = useState(0);

    const pages = Math.ceil(total / limit);


    useEffect(() => {
        setFromPage((currentPage - 1) * limit);
        localStorage.setItem("from", (currentPage - 1) * limit);
        onChange();
    }, [currentPage, limit])

    const setActualPage = (page) => {
        localStorage.setItem("lastPage", page);
        setCurrentPage(page);
    }

    useEffect(() => {
        if (Number(localStorage.getItem("lastPage")) > pages) {
            setActualPage(1)
        }
    }, [pages])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 350) {
                setVisiblePages(2);
            } else {
                setVisiblePages(3);
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    let startPage = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
    let endPage = Math.min(startPage + visiblePages - 1, pages);

    if (endPage - startPage + 1 < visiblePages) {
        startPage = Math.max(endPage - visiblePages + 1, 1);
    }

    const renderPaginationItems = () => {
        const items = [];
        if (currentPage === 1) {
            items.push(
                <li key="prevBtn">
                    <button className="flex items-center px-3 py-2 ml-0 bg-purple-50 border cursor-default border-purple-100 rounded-l-lg text-purple-200  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                </li>
            );
        } else {
            items.push(
                <li key="prevBtn">
                    <button onClick={() => { setActualPage(currentPage - 1) }} className="flex items-center px-3 py-2 ml-0 bg-white border border-gray-300 rounded-l-lg text-gray-500 hover:bg-purple-600 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                </li>
            );
        }


        for (let i = startPage; i <= endPage; i++) {
            if (i === currentPage) {
                items.push(
                    <li key={i}>
                        <button className="flex items-center px-3 py-2 leading-tight text-purple-500 cursor-default font-semibold bg-purple-200 border border-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-300">
                            {i}
                        </button>
                    </li>
                );
            } else {
                items.push(
                    <li key={i}>
                        <button onClick={() => { setActualPage(i) }}
                            href="#"
                            className="flex items-center px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-purple-600 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            {i}
                        </button>
                    </li>
                );
            }

        }

        if (endPage < pages) {
            if (endPage < pages - 1) {
                items.push(
                    <li key="ellipsis-end">
                        <span className="flex items-center px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">...</span>
                    </li>
                );
            }
            items.push(
                <li key={pages}>
                    <button onClick={() => { setActualPage(pages) }}
                        href="#"
                        className="flex items-center px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-purple-600 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        {pages}
                    </button>
                </li>
            );
        }

        if (currentPage === pages) {
            items.push(
                <li key="nextBtn">
                    <button className="flex items-center px-3 py-2 ml-0 bg-purple-50 border cursor-default border-purple-100 rounded-r-lg text-purple-200  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </button>
                </li>
            );
        } else {
            items.push(
                <li key="nextBtn">
                    <button onClick={() => { setActualPage(currentPage + 1) }} className="flex items-center px-3 py-2 ml-0 text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-purple-600 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </button>
                </li>
            );
        }
        return items;
    };

    return (
        <nav className="flex flex-col mt-8 mr-2 items-center">
            <div className="my-4">
                <p className="text-sm dark:text-gray-400">Showing <span className="font-bold text-purple-500 dark:text-gray-300">{users.data.users.length}</span> out of <span className="font-bold text-purple-500 dark:text-gray-300">{limit}</span> - Total users <span className="font-bold text-purple-500 dark:text-gray-300">{total}</span> </p>
            </div>
            <ul className="inline-flex -space-x-px select-none">
                {renderPaginationItems()}
            </ul>
        </nav >
    );
}

Pagination.propTypes = {
    users: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Pagination;