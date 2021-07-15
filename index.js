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


// create schema = rules to control type of data

const eventSchema = mongoose.Schema({
    title: String,
    date: Date,
    description: String,
    cost: String,
    attendees: Array
})

const Event = mongoose.model('Event', eventSchema) // create model from Schema 

const newEvent = {
    title: 'Clean up Boca Beach',
    date: '2021-08-02',
    description: 'Cleaning up all trash from Boca Beach',
    cost: 'Free',
    attendees: ['Christan', 'Mia', 'Noah', 'Emily', 'Zach']
}

function createEvent(){
    new Event(newEvent)
    .save()
    .then( () => console.log('Event was saved'))
    .catch(err => console.log(err))
}

app.get('/', (req, res) => {
    createEvent()
    res.send('Event was created')
})


app.listen(5000, (req, res) => {
    console.log('Listening on port 5000...')
} )
