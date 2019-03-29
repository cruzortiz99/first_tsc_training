// ----------------------------------
// Namespaces:
// Is one of the way to split or modularize the code
// of an app
// ----------------------------------

namespace MyMath {
  const PI: number = 3.1415

  export function calculateCircunference(diameter: number): number {
    return diameter * PI
  }

  export function calculateRectangle(width: number, length: number): number {
    return width * length
  }
}

console.log(MyMath.calculateRectangle(10,10))
console.log(MyMath.calculateCircunference(10))