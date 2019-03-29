"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// --------------------------------------------------
// Implicit declaration
// --------------------------------------------------
// string
var myName = 'Cruz';
// number
var myNumber = 25;
// boolean
var isTrue = true;
// --------------------------------------------------
// Explicit
// --------------------------------------------------
// string
var myName2;
myName2 = 'hola';
// number
var myNumber2;
myNumber2 = 25;
// boolean
var isTrue2;
isTrue2 = false;
// ---------------------------------------------------
// Arrays
// ---------------------------------------------------
// Implicit declaration, array of strings
var fristArray = ['one', 'two'];
// error in reasignation
// fristArray = [2,3]
//Explicit declaration
var secondArray = [0, 50];
secondArray = ['hola', 'nuevo'];
// ---------------------------------------------------
// Tuples, are Arrays, but with an especific format, for instance ['string', 252]
// ---------------------------------------------------
var thirdArray = ['Some String', 256252];
// Compilation error
// thirdArray = [1231,'Some String']
thirdArray = ['Other String', 525];
// ---------------------------------------------------
// Enums:
// are sets of constants values use to retrict the type and values of a variable
// ---------------------------------------------------
var Color;
// ---------------------------------------------------
// Enums:
// are sets of constants values use to retrict the type and values of a variable
// ---------------------------------------------------
(function (Color) {
    Color[Color["Blue"] = 0] = "Blue";
    Color[Color["Gray"] = 1] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Yelow"] = 101] = "Yelow";
    Color["Purple"] = "purple"; // output 'purple'
})(Color || (Color = {}));
var purple = Color.Purple;
// ---------------------------------------------------
// Any type
// ---------------------------------------------------
var carr = 'car';
carr = 46;
carr = {};
carr = [];
// -----------------------------------------------------
// Functions
// -----------------------------------------------------
// retrun type
function returnMyName() {
    return 'Myname';
}
// void 
function withOuthReturn() {
    console.log('void');
}
// arguments types
function multiply(a, b) {
    return a * b;
}
// -----------------------------------------------------
// Functions as a type
// the arrow function as a type defines witch types of functions are allowed to be set to the variable
// -----------------------------------------------------
var myMultiply = multiply;
// -----------------------------------------------------
// Objects
// -----------------------------------------------------
// Validates that the object has the correctly properties and values
var userData = {
    name: 'Cruz',
    age: 27
};
userData = {
    name: 'OtheName',
    age: 50 // error if is not a number or is not age property
};
var complex = {
    data: [1, 2, 3],
    output: function (all) {
        return all ? this.data : [];
    }
};
// Now we can declare a type Complex
var complex2 = {
    data: [252, 525],
    output: function () { return this.data; }
};
// -----------------------------------------------------
// Unions 
// -----------------------------------------------------
// When type can be more than one type but type any is not a solution for the problem
var realAge = 27;
realAge = '27';
// -----------------------------------------------------
// Check Types
// -----------------------------------------------------
var finalValue = 'a string value';
if (typeof finalValue === 'string') {
    // if the type is string
}
// -----------------------------------------------------
// Never Types
// ----------------------------------------------------- 
// never != void, never is for never return anything ever, void can return void functions
function neverReturns() {
    throw Error('An error');
}
// -----------------------------------------------------
// Non-nullable and nullable types 
// -----------------------------------------------------
// nullables
var canNotBeNull = 12;
// canNotBeNull = null /* Can't not seassing variable to null */
var canBeNull = 56;
canBeNull = null;
// -----------------------------------------------
// Exercise, be type explicit for this two objects
// -----------------------------------------------
var bannkAccount = {
    money: 200,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: 'Cruz',
    bannkAccount: bannkAccount,
    hobbies: ['Sports', 'Coooking']
};
myself.bannkAccount.deposit(3000);
var newBankAccount = {
    money: 200,
    deposit: function (value) {
        this.money += value;
    }
};
var newMyself = {
    name: 'Cruz',
    bannkAccount: newBankAccount,
    hobbies: ['Sports', 'Cooking']
};
newMyself.bannkAccount.deposit(3000);
// -----------------------------------------------
// let and const declarations
// -----------------------------------------------
// let, block scope variable
var someBlockScopeVariable = 'a Variable';
// Block
function reset() {
    var someBlockScopeVariable = null;
    console.log(someBlockScopeVariable); /* null */
}
reset();
console.log(someBlockScopeVariable /* a Variable */);
// const, scope constant
var someConstant = 'a Constant';
// someConstant = '' /* error because constants can't be re-assing */
// -----------------------------------------------
// Arrow functions
// -----------------------------------------------
// commonjs functions
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 5)); /* 15 */
// Arrow
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(20, 3)); /* 60 */
// -----------------------------------------------
// Default parameters
// -----------------------------------------------
var countDown = function (start) {
    if (start === void 0) { start = 5; }
    while (start > 0) {
        start -= 1;
        console.log(start);
    }
    console.log('Done', start);
};
countDown();
// -------------------------------------------------
// Rest & Spread operations
// -------------------------------------------------
// Spread operator
var numbersArray = [3, 4, 5, 99, -60]; /* Array */
console.log(Math.max(33, 99, 50, -6)); /* List */
// console.log(Math.max(numbersArray)) /* Compilation error */
console.log(Math.max.apply(Math, numbersArray)); /* 99 */
// Rest operator
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(5, 6, 7, 8));
// --------------------------------------------------
// Destructuring
// --------------------------------------------------
// Arrays
var myHobbies = ['Cooking', 'Sports'];
var hobbie1 = myHobbies[0], hobbie2 = myHobbies[1];
console.log(hobbie1, hobbie2);
// Objects
var user = { name: 'Cruz', age: 27 };
var userName = user.name, userAge = user.age;
console.log(userName, userAge);
// ----------------------------------------------------
// Templates literals
// ----------------------------------------------------
var myNewName = 'Cruz';
var complexText = "This is a template literal using my name, " + myNewName + "\nMultiple lines accepted";
// ----------------------------------------------------
// Exercise: use type script to write the next code
/* 1 */ var double = function (value) {
    return value * 2;
};
console.log(double(10));
/* 2 */ var greet = function (name) {
    if (name === undefined) {
        name = 'Cruz';
    }
    console.log('Hello, ' + name);
};
console.log(greet('Beatriz'));
/* 3 */ var numbers = [3, 33, -3, 88, 6];
console.log(Math.min.apply(Math, numbers));
/* 4 */ var newArray = [55, 20];
Array.prototype.push.apply(newArray, numbers);
console.log(newArray);
/* 5 */ var testResults = [10, 5, 6];
var result1 = testResults[0];
var result2 = testResults[1];
var result3 = testResults[2];
/* 6 */ var scientist = { firstName: 'Cruz', experience: 2 };
var firstName = scientist.firstName;
var experience = scientist.experience;
console.log(firstName, experience);
// ----------------------------------------------------
// Solution
//-----------------------------------------------------
/* 1 */ var typeDouble = function (value) {
    return value * 2;
};
console.log(typeDouble(10));
/* 2 */ var typeGreet = function (name) {
    console.log('Hello, ' + name);
};
console.log(typeGreet('Beatriz'));
/* 3 */ var typeNumbers = [3, 33, -3, 88, 6];
console.log(Math.min.apply(Math, typeNumbers));
/* 4 */ var newArrays = [55, 20];
newArray.push.apply(newArray, typeNumbers);
console.log(newArray);
/* 5 */ var typetestResults = [10, 5, 6];
var typeResult1 = typetestResults[0], typeResult2 = typetestResults[1], typeResult3 = typetestResults[2];
/* 6 */ var typeScientist = {
    firstName: 'Cruz',
    experience: 2
};
var typeFirstName = typeScientist.firstName, typeExperience = typeScientist.experience;
console.log(typeFirstName, typeExperience);
// -----------------------------------------
// Class
// -----------------------------------------
var PersonClass = /** @class */ (function () {
    // Short setup sintax, declares and set lastName only using the constructor
    function PersonClass(name, lastName) {
        this.lastName = lastName;
        this.type = '';
        this.age = 30;
        this.name = name;
    }
    PersonClass.prototype.getAge = function () {
        return this.age;
    };
    PersonClass.prototype.typeIs = function (type) {
        this.type = type;
        return this.type;
    };
    return PersonClass;
}());
var person = new PersonClass('Cruz', 'Ortiz');
person.getAge();
person.typeIs('Cool');
// -----------------------------------------
// Inheritance
// -----------------------------------------
var Cruz = /** @class */ (function (_super) {
    __extends(Cruz, _super);
    // If your child class has a constructor, alway has to calls the super constructor 
    function Cruz(lastName) {
        var _this = 
        // Setting default values of children classes
        _super.call(this, 'Cruz', lastName) || this;
        // Setting protected properties 
        _this.age = 27;
        return _this;
    }
    return Cruz;
}(PersonClass));
var me = new Cruz('Ortiz');
//-----------------------------------------
// Getters & Setters:
// Are useful when a criteria must be apply when a property is set or read
// -----------------------------------------
var Plant = /** @class */ (function () {
    function Plant() {
        this.plantSpecie = '';
    }
    Object.defineProperty(Plant.prototype, "specie", {
        // getter: will be accessed like a property
        get: function () {
            return this.plantSpecie;
        },
        // setter: will be accessed like a property
        set: function (specie) {
            if (specie.length > 30) {
                console.error('Must be smaller than 30 characters');
            }
            else {
                this.plantSpecie = specie;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var tomato = new Plant();
// -----------------------------------------
// Statics properties and methods 
// -----------------------------------------
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.CircleArea = function (radio) {
        return 2 * Helpers.pi * radio;
    };
    Helpers.pi = 3.1415;
    return Helpers;
}());
var firstCircle = Helpers.CircleArea(2);
// -----------------------------------------
// Abstract classes: are classes that can only be inhertanced.
// -----------------------------------------
var Project = /** @class */ (function () {
    function Project() {
        this.projecName = '';
        this.budget = 0;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var IT = /** @class */ (function (_super) {
    __extends(IT, _super);
    function IT() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IT.prototype.changeName = function (name) {
        this.projecName = name;
    };
    return IT;
}(Project));
// -----------------------------------------
// Private constructors 
// -----------------------------------------
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The only one');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// const wrong = new OnlyOne('wrong')
var right = OnlyOne.getInstance();
// -----------------------------------------
// Read only properties
// -----------------------------------------
var ReadOnlyOne = /** @class */ (function () {
    function ReadOnlyOne(name) {
        this.name = name;
    }
    ReadOnlyOne.getInstance = function () {
        if (!ReadOnlyOne.instance) {
            ReadOnlyOne.instance = new ReadOnlyOne('The only one');
        }
        return ReadOnlyOne.instance;
    };
    return ReadOnlyOne;
}());
var readOnly = ReadOnlyOne.getInstance();
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
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.acceleration = 0;
    }
    Car.prototype.honk = function () {
        console.log('Tooot');
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration += speed;
    };
    return Car;
}());
var car = new Car('BMW');
car.honk();
car.accelerate(10);
/* 2 */
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        this.width = 0;
        this.lenght = 0;
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, lenght) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.lenght = lenght;
        return _this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.lenght;
    };
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle(5, 3);
rectangle.calcSize();
/* 3 */
var ExersicePerson = /** @class */ (function () {
    function ExersicePerson() {
        this._firstName = '';
    }
    Object.defineProperty(ExersicePerson.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (name) {
            this._firstName = name.length > 3 ? name : '';
        },
        enumerable: true,
        configurable: true
    });
    return ExersicePerson;
}());
var exercisePerson = new ExersicePerson();
console.log(exercisePerson.firstName);
exercisePerson.firstName = 'Ma';
console.log(exercisePerson.firstName);
exercisePerson.firstName = 'Maximilian';
console.log(exercisePerson.firstName);
// ---------------------------------
// Modules
// ---------------------------------
System.register("modules/05_module", [], function (exports_1, context_1) {
    "use strict";
    var PI;
    var __moduleName = context_1 && context_1.id;
    function calculateCircunference(diameter) {
        return diameter * PI;
    }
    exports_1("calculateCircunference", calculateCircunference);
    function calculateRectangle(width, length) {
        return width * length;
    }
    exports_1("calculateRectangle", calculateRectangle);
    return {
        setters: [],
        execute: function () {
            PI = 3.1415;
        }
    };
});
// ----------------------------------
// Namespaces:
// Is one of the way to split or modularize the code
// of an app
// ----------------------------------
var MyMath;
// ----------------------------------
// Namespaces:
// Is one of the way to split or modularize the code
// of an app
// ----------------------------------
(function (MyMath) {
    var PI = 3.1415;
    function calculateCircunference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCircunference = calculateCircunference;
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
console.log(MyMath.calculateRectangle(10, 10));
console.log(MyMath.calculateCircunference(10));
System.register("modules/05_using_modules", ["modules/05_module"], function (exports_2, context_2) {
    "use strict";
    var _05_module_1;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (_05_module_1_1) {
                _05_module_1 = _05_module_1_1;
            }
        ],
        execute: function () {
            console.log(_05_module_1.calculateCircunference(10));
            console.log(_05_module_1.calculateRectangle(10, 10));
        }
    };
});
// --------------------------------------
// Importing namespaces
// -------------------------------------
/// <reference path="./05_namespaces.ts"/>
console.log(MyMath.calculateCircunference(10));
console.log(MyMath.calculateRectangle(10, 10));
