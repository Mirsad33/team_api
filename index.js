const printStudents = require('./lib/printStudents.js')
const addStudent = require('./lib/addStudent.js')
const studentName = process.argv[2]

if (studentName === 'print') {
  printStudents()
} else {
  addStudent(studentName)

}

  



  








