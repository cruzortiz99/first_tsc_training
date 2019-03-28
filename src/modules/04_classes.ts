// -----------------------------------------
// Class
// -----------------------------------------
class PersonClass {
  name: string
  private type: string = ''
  protected age: number = 30
  // Short setup sintax, declares and set lastName only using the constructor
  constructor(name: string, public lastName: string) {
    this.name = name
  }
  getAge(): number {
    return this.age
  }
  typeIs(type: string): string {
    this.type = type
    return this.type
  }
}

const person = new PersonClass('Cruz', 'Ortiz')
person.getAge()
person.typeIs('Cool')
// -----------------------------------------
// Inheritance
// -----------------------------------------
class Cruz extends PersonClass {
  // If your child class has a constructor, alway has to calls the super constructor 
  constructor(lastName: string) {
    // Setting default values of children classes
    super('Cruz', lastName)
    // Setting protected properties 
    this.age = 27
  }
}
const me = new Cruz('Ortiz')
//-----------------------------------------
// Getters & Setters:
// Are useful when a criteria must be apply when a property is set or read
// -----------------------------------------
class Plant {
  private plantSpecie: string = ''
  // setter: will be accessed like a property
  set specie(specie: string) {
    if (specie.length > 30) {
      console.error('Must be smaller than 30 characters')
    } else {
      this.plantSpecie = specie
    }
  }
  // getter: will be accessed like a property
  get specie(): string {
    return this.plantSpecie
  }
}
const tomato = new Plant()
// -----------------------------------------
// Statics properties and methods 
// -----------------------------------------
class Helpers {
  static pi: number = 3.1415
  static CircleArea(radio: number): number {
    return 2 * Helpers.pi * radio
  }
}
const firstCircle = Helpers.CircleArea(2)
// -----------------------------------------
// Abstract classes: are classes that can only be inhertanced.
// -----------------------------------------
abstract class Project {
  projecName: string = ''
  budget: number = 0
  abstract changeName(name: string): void
  calcBudget(): number {
    return this.budget * 2
  }
}
class IT extends Project {
  changeName(name: string): void {
    this.projecName = name
  }
}
// -----------------------------------------
// Private constructors 
// -----------------------------------------
class OnlyOne {
  private static instance: OnlyOne
  private constructor(public name: string, ) { }
  static getInstance(): OnlyOne {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('The only one')
    }
    return OnlyOne.instance
  }
}
// const wrong = new OnlyOne('wrong')
const right = OnlyOne.getInstance()
// -----------------------------------------
// Read only properties
// -----------------------------------------
class ReadOnlyOne {
  private static instance: ReadOnlyOne
  private constructor(public readonly name: string, ) { }
  static getInstance(): ReadOnlyOne {
    if (!ReadOnlyOne.instance) {
      ReadOnlyOne.instance = new ReadOnlyOne('The only one')
    }
    return ReadOnlyOne.instance
  }
}
const readOnly = ReadOnlyOne.getInstance()
// readOnly.name = 'wrong'
// -----------------------------------------
// Exercises
/* 1 */
// function Car(name:any) {
//   this.name = name
//   this.acceleration = 0
//   this.honk = function () {
//     console.log('Tooot')
//   }
//   this.accelerate = function (speed:any) {
//     this.acceleration += speed
//   }
// }
// var car = new Car('BMW')
// car.honk()
// car.accelerate(10)
/* 2 */
// var baseObject = {
//   width: 0,
//   lenght: 0,
// }
// var rectangle = Object.create(baseObject)
// rectangle.width = 5
// rectangle.lenght = 3
// rectangle.calcSize = function() {
//   return rectangle.width * rectangle.lenght
// }
/* 3 */
// var person = {
//   _firstName: ''
// }
// Object.defineProperty(person, 'firstName', {
//   get: function () {
//     return this._firstName
//   },
//   set: function (value) {
//     if (value.lenght > 3) {
//       this._firstName = value
//     } else {
//       this._firstName = ''
//     }
//   },
//   enumerable: true,
//   configurable:true
// })
// console.log(person.firstName)
// person.firstName = 'Ma'
// console.log(person.firstName)
// person.firstName = 'Maximilian'
// console.log(person.firstName)
// -----------------------------------------
// Solutions
/* 1 */
class Car {
  acceleration: number = 0
  constructor(public name: string) { }
  honk(): void {
    console.log('Tooot')
  }
  accelerate(speed: number): void {
    this.acceleration += speed
  }
}
const car: Car = new Car('BMW')
car.honk()
car.accelerate(10)
/* 2 */
abstract class BaseObject {
  width: number = 0
  lenght: number = 0
  abstract calcSize(): number
}
class Rectangle extends BaseObject {
  constructor(width: number, lenght: number) {
    super()
    this.width = width
    this.lenght = lenght
  }
  calcSize(): number {
    return this.width * this.lenght
  }
}
const rectangle = new Rectangle(5, 3)
rectangle.calcSize()
/* 3 */
class ExersicePerson {
  private _firstName:string = ''

  get firstName():string {
    return this._firstName
  }
  set firstName(name:string) {
    this._firstName = name.length > 3 ? name : ''
  }
}
const exercisePerson = new ExersicePerson()
console.log(exercisePerson.firstName)
exercisePerson.firstName = 'Ma'
console.log(exercisePerson.firstName)
exercisePerson.firstName = 'Maximilian'
console.log(exercisePerson.firstName)
