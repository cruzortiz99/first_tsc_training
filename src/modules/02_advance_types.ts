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

let complex : {data : number[], output: (all:boolean)=> number[]} = {
  data: [1,2,3],
  output: function (all: boolean) {
    return all ? this.data : []
  }
}