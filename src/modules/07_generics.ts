// Given a function
function echo(data: any) {
  return data
}
// Type check for any, is not safe
console.log(echo("Cruz"))
console.log(echo(2))
console.log(echo({ name: "Cruz", age: 27 }))

// Using generics
function betterEcho<T>(data: T) {
  return data
}
// Correct type check 
console.log(betterEcho<string>("Cruz"))
console.log(betterEcho<number>(2))
// console.log(betterEcho<number>('2')) /* Type check error */
console.log(betterEcho({ name: "Cruz", age: 27 }))

// Arrays
const arrayNumber: Array<number> = [25, 36]
arrayNumber.push(1)
// arrayNumber.push('sdasda') /* Type check error */

// Using generic classes extending others types 
class SomeGeneric<T extends number | string> {
  name: string
  address: T /* Dynamic Type */
  constructor(name: string, address: T) {
    this.name = name,
      this.address = address
  }
}