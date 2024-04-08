const fs = require('fs')

fs.readFile('./students.txt', 'utf8', (err, data) => {
  if (err) {
    return console.log(err)
  }

  const names = data.split()

  for (let name of data) {
    console.log(name)
  }
})


  








