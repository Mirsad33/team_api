// const literal = {
//   name: 'JD',
//   age: 44
// }

function Person(name, age, hobbies) {
  this.name = name
  this.age = age
  this.hobbies = hobbies
  // this.species = 'homosapien'
}

Person.sayHi = function () {
  console.log('Hi')
}

Person.prototype.species = 'homosapien'

Person.prototype.haveBirthday = function() {
    this.age++
    console.log('Happy Birthday!')
  }

Person.prototype.printBirthday = function() {
    console.log(`You are ${this.age} years old`)
  }


const jd = new Person('JD', 44, ['fishing', 'pickleball'])
const bob = new Person('Bob', 99, ['Bingo', 'Sitting'])
const sarah = new Person('Sarah', 40, ['movies', 'pickleball'])

console.log(jd)
console.log(bob.species)
console.log(sarah)

// jd.haveBirthday()

// jd.printBirthday()

// bob.printBirthday()

// console.log(jd.age)

Person.sayHi()








  



  








