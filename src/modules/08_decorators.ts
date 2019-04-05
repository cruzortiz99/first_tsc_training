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
  return value ? logged : console.log
}
@loggin(true)
class DecoCar {

}