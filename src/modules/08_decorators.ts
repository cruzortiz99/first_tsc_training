// ------------------------------
// Decorators
// ------------------------------

// Class level decorator, TS will give to these types of decorators only the constructors 
function logged(constructorFn: Function) {
  console.log(constructorFn)
}
// attaching decorators to a function
@logged
class DecoPerson {
  constructor() {
    console.log('hi')
  }
}

// Factory
function loggin(value: boolean) {
  return value ? logged : () => { }
}
@loggin(true)
class DecoCar {

}

// Advanced
function printable(constructorFn: Function) {
  constructorFn.prototype.print = function () {
    console.log(this)
  }
}
@printable
class OtherPlant {
  name = "Green Plant"
}
const newPlant = new OtherPlant()
// newPlant.print() /* Error because strict mode is on */

// Method decoratror

function editable(value: boolean) {
  return function (target: any, property: string, descriptor: PropertyDescriptor) {
    descriptor.writable = false
  }
}
class MethodDecated {
  @editable(false)
  calcBuget() {
    console.log(100)
  }
}
const decorated = new MethodDecated()
decorated.calcBuget = function () {
  console.log(10)
}