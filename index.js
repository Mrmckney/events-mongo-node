const express = require('express') // import express
const cors = require('cors') // import cors
const mongoose = require('mongoose') // import mongoose
require('dotenv/config') // importing dotenv libriary to use variable

const app = express() // creating app as Express
app.use(express.json()) // use express and parse everything into json

// connect to mongoose 
mongoose
    .connect(process.env.DB_CONNECTION , {useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => console.log('connected to mongo...'))
    .catch(err => console.log(err))


// first get route 

app.get('/events', (req, res) => {
    res.send('Hello World')
})


app.listen(5000, (req, res) => {
    console.log('Listening on port 5000...')
} )
