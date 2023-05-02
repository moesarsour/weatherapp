import React from 'react'
import '../App.css'

function Footer () {
    return(
        <footer className=" bg-white rounded-lg shadow m-4 dark:bg-blue-900">
        <div className='mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
           <h3 className='text-blue-500'>
             Photo by <a className='hover:underline'href='https://unsplash.com/@dagna?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Bjark</a> from <a className='hover:underline'href='https://unsplash.com/photos/DZ975EkUJH0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>
          </h3>
        </div>
      </footer>
    )
}

export default Footer