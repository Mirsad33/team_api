const express = require('express')
const app = express()
const PORT = 3333


const { Client } = require('pg')

const client = new Client ({
    host: 'localhost',
    user: 'postgres',
    password: 'Struga3387',
    database: 'student_course_db'
})

app.use(express.json())

// Get all courses
app.get('/api/courses', async (request, response) => {
    const { rows } = await client.query('SELECT * FROM courses')

    response.json(rows)
})
// Add a course
add.post('/api/courses', async (request, response) => {
    const courseData = request.body
    await client.query('INSERT INTO courses (name, type) VALUES ($1, $2)', [course.Data.name, course.Data.type])

    response.json({
        message: 'Course added successfully!'
    })
})

// Connect to the database
client.connect()
    .then(() => {
        // Start express server
        app.listen(PORT, () => console.log ('Server started on port', PORT))
    })