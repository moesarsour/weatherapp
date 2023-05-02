import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'



function Nav () {
    return (
        <nav className=" w-full bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
              <img src='https://i.pinimg.com/originals/06/c4/f7/06c4f70ec5931e2342e703e8a3f0a253.png' className="h-8 mr-3" alt="weather logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Weather App</span>
          </a>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                 <Link to='/' className='text-white'>Home</Link>
              </li>
              <li>
                <a href='/multi'>5 day forecast</a>
              </li>
              <li>
                <a href='/favorite' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Favorites</a>
              </li>
              <li>
                <a href="/new" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Add a City</a>
              </li>
            </ul>
          </div>
          </div>

        </nav>
        );
}

export default Nav
