function LoadingCard() {
    const loadingCards = 3;

    const loadingCardsArray = Array.from({ length: loadingCards }, (_, i) => (
        <div key={i} className="bg-white border rounded-lg shadow-lg p-6 text-center dark:bg-gray-600 dark:border-gray-500">
            <div className="flex flex-col items-center pb-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300 w-28 h-28 mb-2 dark:text-gray-700">
                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                </svg>
                <div className="mb-1 h-5 w-40 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                <span className="mt-2 h-3 w-24 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                <div className="py-6 flex items-center">
                    <span className="h-4 mt-2 w-48 sm:w-60 md:w-60 lg:w-60 rounded-full bg-gray-300 dark:bg-gray-700">
                    </span>
                </div>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <a href="#" className="h-10 mt-2 w-20 inline-flex items-center bg-gray-300 rounded-lg dark:bg-gray-700"></a>
                    <a href="#" className="h-10 mt-2 w-20 inline-flex items-center bg-gray-300 rounded-lg dark:bg-gray-700"></a>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-cols-min gap-4 animate-pulse">
            {loadingCardsArray}
        </div>
    );
}

export default LoadingCard;