import React from 'react'
import '../App.css'

function New () {
    return(
        <div className=' w-full max-w-xs mt-10  '>
            <form className='bg-blue-800 rounded-full shadow-md px-8 pt-6 pb-8 mb-4 '>
            <h1 className='text-white text-2xl ml-12'>Add a new City</h1>
                <div>
                    <input type='text' id='city_name' placeholder='Add Your City'className='rounded mt-10 ml-10 shadow appearance-none'/>
                </div>
                <button type='submit' className="px-2 py-3 bg-blue-700 text-blue-400 text-xl mt-10 rounded-2xl ml-11">Add to Favorites</button>
            </form>
        </div>

        
    )
}

export default New
