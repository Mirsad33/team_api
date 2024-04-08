const fs = require('fs')


function printStudents() {
    fs.readFile('./students.txt', 'utf8', (err, data) => {
        if (err) {
            return console.log(err)

          
        }

        const name = data.split('\n')
        console.log('\nStudent List:', '\n', '----------')

        for (let name of names) {
            console.log(name)

        

        }


    })
}



function addStudent(studentName) {
    fs.appendFile('./students.txt', '\n', + studentName, (err) => {
      if (err) {
        return console.log(err)
      }

console.log('Student has been added!')

    })
}



module.exports = {
    print: printStudents,
    add: addStudent
}




