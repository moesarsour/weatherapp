import React from 'react';

const Home = () => {
    return (
        <div className='homePage'>
            <div className='header'>
                <h2>Weather</h2>
            </div>

            <div className='instructions'>
                <p>Enter your zipcode below to get weather conditions for that area.</p>
            </div>

            <div className='zipcodeForm'>
                <form method='POST' action='/search-location'>
                    <input type='text' placeholder='Enter zipcode' name='zipcode'/>
                    <button>ENTER</button>
                </form>
            </div>
        </div>
    )
}

export default Home