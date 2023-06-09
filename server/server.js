// Dependencies
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const cors = require('cors');
const City = require('./controllers/city_controller');

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(cors());
mongoose.connect(process.env.MONGO_URI, 
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }).then(() => {
    console.log('connected to mongo: ', process.env.MONGO_URI);
  }).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// ROUTES
app.get('/home', (req,res) => {
  res.send('yippie ki yay mother f*****')
})

// CITY CONTROLLER

// Schema
const city = new City;

// 404 PAGE
app.get('*', (req,res)=>{
    res.send('404')
})

// POST
// app.post('/multi', (req,res)=>{
//   res.render()
// // })

// GET


// LISTEN
app.listen(PORT, () =>{
    console.log('its alive')
})
