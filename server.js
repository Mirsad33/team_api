const express = require('express')
const path = require('path')


const app = express()
const PORT = 3333

const data = [
    {
        id: 234,
        name: 'JD',
        age: 44
    },
    {
        id: 1002,
        name: 'Bob',
        age: 99
    },
    {
        id: 555,
        name: 'Sarah',
        age: 40
    }
]

// Create a GET route for every file inside of public
app.use(express.static('./public'))




// // Create a GET route that listens for the user to visit the root address/domain
// app.get('/', (requestObj, resposnseObj) => {
//     resposnseObj.sendFile(path.join(__dirname, './public/index.html'))
// })


// Get api route to send back the array of users
app.get('/api/users', (requestObj, resposnseObj) => {
    const nameQuery = requestObj.query.name.toLowerCase()

    if (nameQuery) {
        const user = data.find(uObj => uObj.name.toLocaleLowerCase() === nameQuery)

        return resposnseObj.json(user)
    }


    resposnseObj.json(data);
});

// GET api route that uses a url parameter to get the ID of a user and send back the matching user object from the data array
app.get('/api/users/:id', (requestObject, responseObject)=>{
    
    const paramId = requestObj.params.id


    const user = data.find(uObj => uObj.id == paramId)

    responseObj.json(user || {message: 'User not found by that ID'})
    })

// BONUS - if the user sends a name query parameter, find the user by name instead and send by the matching object 
// app.get('/api/users/:id', (requestObj, resposnseObj) => {
//     const userId = parseInt(requestObj.params.id);
//     const nameQuery = requestObj.query.name;
    
//     let user;
//     if (nameQuery) {
//         user = data.find(user => user.name.toLowerCase() === nameQuery.toLowerCase());
//     } else {
//         user = data.find(user => user.id === userId);
//     }

//     if (user) {
//         resposnseObj.json(user);
//     } else {
//         resposnseObj.status(404).send('User not found');
//     }
// });






// Start the server - Tell the server to start listening for routes to be visited
app.listen(PORT, () => {
    console.log('Server running on port', PORT)
})








  



  








