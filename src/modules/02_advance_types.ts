// functions
// retrun type
function returnMyName(): string {
  return 'Myname'
}
// void 
function withOuthReturn(): void {
  console.log('void')
}
// arguments types
function multiply(a: number, b: number): number {
  return a * b
}

// Functions as a type
// the arrow function as a type defines witch types of functions are allowed to be set to the variable
let myMultiply: (val1: number, val2: number) => number = multiply

// objects
// Validates that the object has the correctly properties and values
let userData: { name: string, age: number } = {
  name: 'Cruz',
  age: 27
}
userData = {
  name: 'OtheName', // error if is not a string or is not name property
  age: 50 // error if is not a number or is not age property
}

let complex: { data: number[], output: (all: boolean) => number[] } = {
  data: [1, 2, 3],
  output: function (all: boolean) {
    return all ? this.data : []
  }
}

// Type alias, to basicaly define a type and refer to it after
// This sintaxis is valid to difine a type, because the type declaration
// otherwise the type must be defined by columns 
type Complex = { data: number[], output: (all: boolean) => number[] }
// Now we can declare a type Complex
let complex2: Complex = {
  data: [252, 525],
  output: function () { return this.data }
}

// Unions 
// When type can be more than one type but type any is not a solution for the problem
let realAge: (string | number) = 27
realAge = '27'

// check types

let finalValue = 'a string value'
if (typeof finalValue === 'string') {
  // if the type is string
}

// never types 
// never != void, never is for never return anything ever, void can return void functions
function neverReturns(): never {
  throw Error('An error')
}

// non-nullable and nullable types 
// nullables
let canNotBeNull = 12
// canNotBeNull = null /* Can't not seassing variable to null */
let canBeNull: (number | null) = 56
canBeNull = null
// -----------------------------------------------
// Exercise, be type explicit for this two objects
// -----------------------------------------------
let bannkAccount = {
  money: 200,
  deposit(value:any) {
    this.money += value
  }
}
let myself = {
  name: 'Cruz',
  bannkAccount: bannkAccount,
  hobbies: ['Sports', 'Coooking']
}
myself.bannkAccount.deposit(3000)
// -------------------------------------------------
// Solution
// -------------------------------------------------
type BannkAccount = {
  money:number,
  deposit:(value:number)=>void
}
type Person = {
  name: string,
  bannkAccount:BannkAccount,
  hobbies:string[]
}
let newBankAccount:BannkAccount= {
  money: 200,
  deposit(value:number):void {
    this.money += value
  } 
}
let newMyself: Person = {
  name: 'Cruz',
  bannkAccount: newBankAccount,
  hobbies: ['Sports', 'Cooking']
}
newMyself.bannkAccount.deposit(3000)