const mongoose = require('mongoose') // import mongoose

// create schema = rules to control type of data
const EventSchema = mongoose.Schema({
    title: String,
    date: Date,
    description: String,
    cost: String,
    attendees: Array
})

module.exports = mongoose.model('Event', EventSchema) // create model from Schema 
