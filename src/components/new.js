import React from 'react'

function New () {
    return(
        <div className='app '>
            <h1>Add a new City</h1>
            <form>
                <div>
                    <label for='city_name'>Add Your City</label>
                    <input type='text' id='city_name'/>
                </div>
                <button type='submit'>Add to Favorites</button>
            </form>
        </div>

        
    )
}

export default New