// -----------------------------------------------
// let and const declarations
// -----------------------------------------------
// let, block scope variable
let someBlockScopeVariable = 'a Variable'
// Block
function reset(): void {
  let someBlockScopeVariable = null
  console.log(someBlockScopeVariable) /* null */
}
reset()
console.log(someBlockScopeVariable /* a Variable */)

// const, scope constant
const someConstant = 'a Constant'
// someConstant = '' /* error because constants can't be re-assing */

// -----------------------------------------------
// Arrow functions
// -----------------------------------------------
// commonjs functions
const addNumbers = function (number1: number, number2: number): number {
  return number1 + number2
}
console.log(addNumbers(10, 5)); /* 15 */
// Arrow
const multiplyNumbers = (number1: number, number2: number): number => number1 * number2
console.log(multiplyNumbers(20, 3)) /* 60 */

// -----------------------------------------------
// Default parameters
// -----------------------------------------------
const countDown = function (start: number = 5): void {
  while (start > 0) {
    start -= 1
    console.log(start)
  }
  console.log('Done', start)
}
countDown()
// -------------------------------------------------
// Rest & Spread operations
// -------------------------------------------------
// Spread operator
const numbersArray = [3, 4, 5, 99, -60] /* Array */
console.log(Math.max(33, 99, 50, -6)) /* List */
// console.log(Math.max(numbersArray)) /* Compilation error */
console.log(Math.max(...numbersArray)) /* 99 */
// Rest operator
function makeArray(...args: number[]): number[] {
  return args
}
console.log(makeArray(5, 6, 7, 8))

// --------------------------------------------------
// Destructuring
// --------------------------------------------------
// Arrays
const myHobbies = ['Cooking', 'Sports']
const [hobbie1, hobbie2] = myHobbies
console.log(hobbie1, hobbie2)
// Objects
let user: { name: string, age: number } = { name: 'Cruz', age: 27 }
let { name: userName, age: userAge } = user
console.log(userName, userAge)

// ----------------------------------------------------
// Templates literals
// ----------------------------------------------------
const myNewName: string = 'Cruz'
const complexText: string = `This is a template literal using my name, ${myNewName}
Multiple lines accepted`

// ----------------------------------------------------
// Exercise: use type script to write the next code

/* 1 */var double = function (value: any) {
  return value * 2
}
console.log(double(10))
/* 2 */var greet = function (name: any) {
  if (name === undefined) { name = 'Cruz' }
  console.log('Hello, ' + name)
}
console.log(greet('Beatriz'))
/* 3 */var numbers = [3, 33, -3, 88, 6]
console.log(Math.min.apply(Math, numbers))
/* 4 */var newArray = [55, 20]
Array.prototype.push.apply(newArray, numbers)
console.log(newArray)
/* 5 */ var testResults = [10, 5, 6]
var result1 = testResults[0]
var result2 = testResults[1]
var result3 = testResults[2]
/* 6 */ var scientist = {firstName:'Cruz', experience: 2}
var firstName = scientist.firstName
var experience = scientist.experience
console.log(firstName, experience) 
// ----------------------------------------------------
// Solution
//-----------------------------------------------------
/* 1 */const typeDouble: (value: number) => number = function (value: number) {
  return value * 2
}
console.log(typeDouble(10))
/* 2 */const typeGreet: (name: string) => void = function (name: string) {
  console.log('Hello, ' + name)
}
console.log(typeGreet('Beatriz'))
/* 3 */const typeNumbers: number[] = [3, 33, -3, 88, 6]
console.log(Math.min(...typeNumbers))
/* 4 */const newArrays: number[] = [55, 20]
newArray.push(...typeNumbers)
console.log(newArray)
/* 5 */const typetestResults: number[] = [10, 5, 6]
let [typeResult1, typeResult2, typeResult3] = typetestResults
/* 6 */ const typeScientist: {firstName:string, experience: number} = {
  firstName: 'Cruz',
  experience: 2
}
let {firstName:typeFirstName, experience:typeExperience} = typeScientist
console.log(typeFirstName, typeExperience)