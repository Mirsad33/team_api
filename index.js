const inquirer = require('inquirer')

inquirer.prompt([
  {
    name: 'age',
    message: 'Please type your age'
  },
  {
    name: 'full_name',
    message: 'Please type your full name'
  }
]).then((answerObj) => {
  console.log(answerObj)
})







  



  








