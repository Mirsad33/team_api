const express = require('express')
const path = require('path')

const app = express()
const api_routes = require('./routes/api_routes')

const PORT = 3333

// Create a GET route for every file inside of public
app.use(express.static('./public'))

// Allow URL Econded form data to be sent through our routes
app.use(express.urlencoded({ extended: false }))

// Allow JSON data to be sent through our routes
app.use(express.json())

// Load Routes
app.use('/api', api_routes)



// Start the server - Tell the server to start listening for routes to be visited
app.listen(PORT, () => {
    console.log('Server running on port', PORT)
})








  



  








