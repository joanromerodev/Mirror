function Footer() {

    const actualYear = new Date().getFullYear()

    return (
        <footer className="bg-white border border-l-0 border-r-0 dark:bg-gray-800 dark:border-gray-500">
            <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"> &copy; {actualYear} <a href="https://github.com/joanromerodev/" target="_blank" rel="noreferrer" className="text-purple-500 hover:underline dark:text-gray-300">Joan Romero</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="https://github.com/joanromerodev/Mirror/blob/main/LICENSE" target="_blank" rel="noreferrer" className="mr-4 hover:text-purple-500 md:mr-6 dark:hover:text-gray-300">License</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer