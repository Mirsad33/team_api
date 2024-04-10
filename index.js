
// function Person() {

// }



class Person {
  constructor(name, age, hobbies) {
    this.name = name
    this.age = age
    this.hobbies = hobbies
  }

  haveBirthday() {
    this.age++
    console.log('Happy Birthday', this.name)
  }

  printBirthday() {
    console.log(`${this.name} is ${this.age} years old.`)
  }
  // Create a method that loops over the hobbies prop array prints out each hobby one by one to the terminal
  printHobbies() {
    console.log('\nHobbies\n--------')

    this.hobbies.array.forEach(hobby => {
      console.log(hobby)
    })
  }

}

const jd = new Person('JD', 44, ['fishing', 'pickleball'])

console.log(jd)

jd.haveBirthday()

// jd.printHobbies()














// function Person(name, age, hobbies) {
//   this.name = name
//   this.age = age
//   this.hobbies = hobbies
//   // this.species = 'homosapien'
// }

// Person.sayHi = function () {
//   console.log('Hi')
// }

// Person.prototype.species = 'homosapien'

// Person.prototype.haveBirthday = function() {
//   this.age++
//   console.log('Happy Birthday!')
// }

// Person.prototype.printBirthday = function() {
//   console.log(`You are ${this.age} years old`)
// }


// const jd = new Person('JD', 44, ['fishing', 'pickleball'])
// const bob = new Person('Bob', 99, ['Bingo', 'Sitting'])
// const sarah = new Person('Sarah', 40, ['movies', 'pickleball'])

// console.log(jd)
// console.log(bob.species)
// console.log(sarah)

// jd.haveBirthday()

// jd.printBirthday()

// bob.printBirthday()

// console.log(jd.age)

// Person.sayHi()








  



  








