// Dependencies
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(methodOverride('_method'))
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

// CITY CONTROLLER

// 404 PAGE
app.get('*', (req,res)=>{
    res.send('404')
})

// LISTEN
app.listen(PORT, () =>{
    console.log('its alive')
})
