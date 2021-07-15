const express = require('express') // import express
const router = express.Router() // use router function from express

// import events controller
const eventsController = require('../controllers/eventsController')
router.get('/events', eventsController.getAllEvents)

// export all routes within the router
module.exports = router