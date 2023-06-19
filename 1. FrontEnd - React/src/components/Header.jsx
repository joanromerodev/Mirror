import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(!('theme' in localStorage) ? false : localStorage.getItem('theme') === 'dark' ? true : false);
  //Icons custom sets
  const appIcon = (
    <svg className="h-9 w-9 mx-4 text-purple-700 dark:text-white" stroke="currentColor" aria-hidden="true" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 254.2 218.3">
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
        <path d="M13.8,3.2C11.6-0.3,6.6-0.9,3.2,1.3C0.4,3.5-0.6,6.6,0.4,9.7v201c0,4.1,3.4,7.5,7.5,7.5c4.1,0,7.5-3.4,7.5-7.5V31.3
                      l131.5,182.9c0.3,0.6,0.9,0.9,1.3,1.3c1.6,1.9,3.4,2.8,6,2.8c4.4,0,7.8-3.4,7.8-7.5l-15.3-23.5L13.8,3.2z"/>
        <path d="M252.9,3.8c-0.6-0.9-1.3-1.6-2.2-2.5c-3.4-2.2-8.5-1.6-10.6,1.9l-77.7,108l-78-108C82-0.3,77.3-0.9,73.8,1.3
                      c-0.3,0.3-0.6,0.3-0.6,0.6c-1.9,1.3-3.1,3.4-3.1,5.9l15.3,22.9l70.1,97.1c1.6,2.5,3.8,3.4,6.6,3.4h0.6c2.2,0,4.7-0.9,6.3-3.4
                      l70.1-97.4v113.3v57.8v9.2c0,4.1,3.4,7.5,7.5,7.5c4.1,0,7.5-3.4,7.5-7.5v-9.2v-57.8V7.9C254.2,6.6,253.5,5,252.9,3.8z"/>
      </g>
    </svg>
  );
  const starIcon = (color) => {
    if (color === "white") {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      );
    }
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-purple-700 dark:text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    );

  }
  const hamburgerIcon = (
    <svg
      className="h-6 w-6 text-purple-700 dark:text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const setDarkMode = () => {
    if (isDarkMode) {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
    setIsDarkMode(!isDarkMode);
  }

  return (
    <header className="bg-white shadow-lg dark:bg-gray-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:py-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="flex items-center -m-1.5 p-1.5">
            <span className="sr-only">Mirror</span>
            {appIcon}
          </a>
        </div>
        <div className="flex">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            {hamburgerIcon}
          </button>
        </div>
      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center -m-1.5 p-1.5">
              <span className="sr-only">Mirror</span>
              {appIcon}
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6 text-purple-700 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              </div>
              <div className="pt-6 inline-flex items-center w-full justify-center">
                <div className='mx-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-purple-700 dark:text-white">
                    <path fillRule='evenodd' d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                  </svg>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div onClick={setDarkMode} className={`w-11 h-6 bg-purple-200 rounded-full peer dark:bg-gray-700 ${isDarkMode ? 'peer-checked' : ''
                    } ${isDarkMode ? 'after:translate-x-full' : ''} after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 ${isDarkMode ? 'peer-checked:bg-gray-700' : ''
                    }`}></div>
                </label>
                <div className='mx-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-purple-700 dark:text-white">
                    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              </div>
              <div className="py-6">
                <a href="https://github.com/joanromerodev/mirror" target="_blank" rel="noreferrer" className="flex items-center justify-center text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                  {starIcon("white")}
                  Star this project
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>

  )
}


export default Header;
