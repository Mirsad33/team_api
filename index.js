const express = require('express')

const app = express()
const PORT = 3333

const data = [
    {
        id: 1,
        name: 'JD',
        age: 44
    },
    {
        id: 2,
        name: 'Bob',
        age: 99
    },
    {
        id: 3,
        name: 'Sarah',
        age: 40
    }
]

// Create a GET route that listens for the user to visit the root address/domain
app.get('/', (requestObj, resposnseObj) => {
    resposnseObj.send('Hey from the server!')
})

app.get('/api/:user_id', (requestObj, resposnseObj) => {
    const id = requestObj.params.user_id
    
    // Pull  the user's object from the data array to by the id property
    const user = data.find((userObj) => {
        if (userObj.id == id) return true
    })
    if (user) {
        return resposnseObj.json(user)
    }
    return resposnseObj.json({
        message: 'User not found matching that.id'
    })
})

app.get('/about', (requestObj, resposnseObj) => {
    resposnseObj.send('<h1>About Header</h1>')
})

app.get('/data', (requestObj, resposnseObj) => {
    const queryParams = requestObj.query

    // Create an empty object

    const obj = {}

    // If they request the name (name: 'true') then we add the property name to the object
    if (queryParams.name === 'true') {
        obj.name = 'JD'
    }

    // If they request the age(age: 'true') then we add the property age to the object
    if (queryParams.age === 'true') {
        obj.age = 44
    }

    // Send the completed object back in the response 
    resposnseObj.json(obj) 

})

// Start the server - Tell the server to start listening for routes to be visited
app.listen(PORT, () => {
    console.log('Server running on port', PORT)
})








  



  








