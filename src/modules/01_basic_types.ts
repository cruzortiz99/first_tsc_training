// --------------------------------------------------
// Implicit declaration
// --------------------------------------------------
// string
let myName = 'Cruz'
// number
let myNumber = 25
// boolean
let isTrue = true
// --------------------------------------------------
// Explicit
// --------------------------------------------------
// string
let myName2: string
myName2 = 'hola'
// number
let myNumber2: number
myNumber2 = 25
// boolean
let isTrue2: boolean
isTrue2 = false

// ---------------------------------------------------
// Arrays
// ---------------------------------------------------
// Implicit declaration, array of strings
let fristArray = ['one', 'two']
// error in reasignation
// fristArray = [2,3]
//Explicit declaration
let secondArray: any[] = [0, 50]
secondArray = ['hola', 'nuevo']

// ---------------------------------------------------
// Tuples, are Arrays, but with an especific format, for instance ['string', 252]
// ---------------------------------------------------
let thirdArray: [string, number] = ['Some String', 256252]
// Compilation error
// thirdArray = [1231,'Some String']
thirdArray = ['Other String', 525]

// ---------------------------------------------------
// Enums:
// are sets of constants values use to retrict the type and values of a variable
// ---------------------------------------------------
enum Color {
  Blue, // 0
  Gray, // 1 is the next value following up the value of the item before 
  Green = 100, // 100
  Yelow, // 101
  Purple = 'purple' // output 'purple'
}
let purple: Color = Color.Purple

// ---------------------------------------------------
// Any type
// ---------------------------------------------------
let carr: any = 'car'
carr = 46
carr = {}
carr = []