import React, { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import './App.css'


const App = () => {

  return (
     <div className='App'>
        <div className='header'>
           <h2>Weather Forcast</h2>
        </div>

        <div className="instructions">
           <p>Search City or Zip Code below.</p>
        </div>

        <div className='zipcodeInput'>
          <form method='POST' action='/search-location'>
            <input type='text' placeholder='Enter zipcode..' name='zipcode'/>
            <button className='button'>ENTER</button>
          </form>
        </div>
     </div>
  )
}

export default App
