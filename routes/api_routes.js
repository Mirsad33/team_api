const router = require('express').Router()
const { v4: generateID } = require('uuid')
const fs = require('fs/promises')


async function getData() {
    const data = await fs.readFile('./db/users.json', 'utf8')

    return JSON.parse(data)
}

// GET all users
router.get('/users', async (requestObj, resposnseObj) => {
    const data = await getData()
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
router.post('/users', async (requestObject, responseObject) => {
    const id = generateID()
    const data = await getData()

    data.push({
        ...requestObject.body,
        id: id
    })

    await fs.writeFile('./db/users.json', JSON.stringify(data, null, 2))

    responseObject.json({
        message: 'User has been added'
    }) 
})

// DELETE a user

router.delete('/users/:id', async (requestObj, responseObject) => {
    const users = await getData()
    const id = requestObj.params.id 

    const filtered = users.filter(uObj => uObj.id !== id)

    await fs.writeFile('./db/users.json', JSON.stringify(filtered, null, 2))

    responseObject.json({
        message: `User with ID of ${id} deleted successfully!`
    })
})

module.exports = router
