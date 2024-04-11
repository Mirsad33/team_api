
class Phone {
  screen = true


  constructor(number, size , model, color) {
    this.number = number
    this.size = size
    this.model = model
    this.color = color
  }

  printModel() {
    console.log('Model:', 'Base')
  }
}

class iPhone extends Phone {
  facetime = true

  constructor(number, size , model, color, appleID) {
    super(number, size , model, color)
    
    this.appleID = appleID
  }
  printModel() {
    console.log('iPhone', this.model)
  }
}

class Samsung extends Phone {
  foldable = true


  constructor(number, size , model, color, repairID) {
    super(number, size , model, color)
    
    this.repairID = repairID
  }
 
}

const jdPhone = new iPhone('777-777-7777', 'standard', '15', 'slate gray', 'dslkfjsdkfj;sdlafkjds' )
const bobPhone = new iPhone('777-777-7777', 'standard', '15', 'gray', 'hsdjkhhjlsjkdhfkhlskd' )

const sarahPhone = new Samsung('777-777-7777', 'mini', '23', 'blue', 'jhlksdjlsdljkdhfkhlskd' )

// console.log(jdPhone)
// console.log(sarahPhone)

jdPhone.printModel()






















// function Person() {

// }



// class Person {
//   // static species = 'homosapien'
//   // species = 'homosapien'


//   constructor(name, age, hobbies) {
//     this.name = name
//     this.age = age
//     this.hobbies = hobbies
//   }

//   haveBirthday() {
//     this.age++
//     console.log('Happy Birthday', this.name)
//   }

//   printBirthday() {
//     console.log(`${this.name} is ${this.age} years old.`)
//   }
//   // Create a method that loops over the hobbies prop array prints out each hobby one by one to the terminal
//   printHobbies() {
//     console.log('\nHobbies\n--------')

//     this.hobbies.forEach(hobby => {
//       console.log(hobby)
//     })
//   }

// }

// const jd = new Person('JD', 44, ['fishing', 'pickleball'])

// console.log(jd.species)
// console.log(jd)

// // jd.haveBirthday()

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








  



  








