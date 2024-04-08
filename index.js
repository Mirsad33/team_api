const { print, add } = require('./lib/studentTools.js')
const dayjs = require('dayjs')

const studentName = process.argv[2]

if (studentName === 'print') {
  print()
} else {
  const date = dayjs().format('MM/DD/YYYY')

  add(studentName + ' - ' + date)
}








  



  








