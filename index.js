const inquirer = require('inquirer')

function takeOut(foodChoices) {
  inquirer.prompt([
    {
      name: 'name',
      message: 'Type your name'
    },
    {
      name: 'address',
      message: 'Type your address',
    },
    {
      name: 'Phone number',
      message: 'Type your number'
    }
  ])
  
}

inquirer.prompt([
  {
    type: 'input',
    name: 'color',
    message: 'Please type your favorite color'
  },
  {
    type: 'confirm',
    name: 'likesNode',
    message: 'Do you like Node JS?'

  },
  {
    type: 'list',
    name: 'answer',
    message: 'What do we use to import a package into a JS file in Node?',
    choices: ['return', 'require', 'function']
  },
  {
    type: 'checkbox',
    name: 'food',
    message: 'What is your favorite food genre?',
    choices: ['Korean', 'Turkish', 'Thai', 'Southern', 'Chinese', 'Mexican']
  },
  {
    type: 'list',
    name: 'menuChoice',
    message: 'Please choose a menu option',
    choices: ['Take out', 'Delivery', 'Exit']

  }
])
  .then((answerObj) => {
    console.log(answerObj)

  })
  .catch((err) => {
    console.log(err)
  })
 








  



  








