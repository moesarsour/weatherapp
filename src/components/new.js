import React from 'react'
import '../App.css'

function New () {
    return(
        <div className='bg-blue-500'>
            <h1>Add a new City</h1>
            <form className=''>
                <div>
                    <input type='text' id='city_name' placeholder='Add Your City'/>
                </div>
                <button type='submit' className="px-2 py-3 bg-blue-900 text-blue-400">Add to Favorites</button>
            </form>
        </div>

        
    )
}

export default New
