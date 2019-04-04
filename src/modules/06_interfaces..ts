// ---------------------------
// Interfaces, basics 
// -------------------------
interface PersonContract {
  name: string,
  age?: number, /* Defines properties in the interfaces that are optionals */
  [propName: string]: any /* Establish that exist an unknown property of type any */
  greet(lastName: string): string
}

function greeting(person: PersonContract) {
  return 'Hello my name is' + person.name
}
const mePerson = {
  name: 'Cruz',
  age: 27,
  greet(lastName: string) {
    return this.name + ' ' + lastName
  }
}

greeting(mePerson)
greeting({
  name: 'Cruz', age: 27, greet(lastName: string) {
    return this.name + ' ' + lastName
  }
}) /* Strict mode when passing object literal */
// ----------------------------------
// Interfaces and classes
// --------------------------------
class PersonOn implements PersonContract {
  name: string;
  middleName: any;
  age?: number | undefined;
  constructor(name: string, middleName: string) {
    this.name = name
    this.middleName = middleName
  }
  greet(lastName: string): string {
    return this.name + ' ' + lastName
  }
}
// ----------------------
// Functional interfaces
// ----------------------
interface DoubleFunction {
  (number1: number, number2: number): number
}
const doubleFunction: DoubleFunction = function (value1, value2) {
  return (value1 + value2) * 2
}
// ------------------------
// Interface inheritance
// ------------------------
interface AgedPerson  extends PersonContract {
  age: number
}

class AgePerson implements AgedPerson {
  middleName: any;  
  age: number;
  name: string;
  constructor (name:string,age:number){
    this.name = name
    this.age = age
  }
  greet(lastName: string): string {
    return 'Hi, ' + lastName
  }
}