const router = require('express').Router()
const { v4: generateID } = require('uuid')
const data = require('../db/data')

// GET all users
router.get('/users', (requestObj, resposnseObj) => {
    const nameQuery = requestObj.query.name?.toLowerCase()

    if (nameQuery) {
        const user = data.find(uObj => uObj.name.toLocaleLowerCase() === nameQuery)

        return resposnseObj.json(user)
    }


    resposnseObj.json(data);
});

// GET user by ID
router.get('/users/form', (requestObject, responseObject)=>{
    
    const paramId = requestObj.params.id


    const user = data.find(uObj => uObj.id == paramId)

    responseObj.json(user || {message: 'User not found by that ID'})
    })
    // POST  add a user
router.post('/users', (requestObject, responseObject) => {
    const id = generateID

    data.push({
        ...requestObject.body,
        id: id
    })

    responseObject.json({
        message: 'User has been added'
    }) 
})

module.exports = router
