// TypeScript basic types
// http://www.typescriptlang.org/docs/handbook/basic-types.html
// Andrew Garner 8/14/18
// Boolean
var isDone = false;
// Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// String
var color = "blue";
color = 'red';
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
// Arrays
var list = [1, 2, 3];
var list2 = [1, 2, 3];
// Tuple
var x;
x = ["Hello", 10];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[2];
// Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
// Void
function warnUser() {
    console.log("This is a warning message");
}
var unusable = undefined;
var unusable2 = null;
// Never
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something Failed");
}
function infiniteLoop() {
    while (true) {
    }
}
create({ prop: 0 });
create(null);
// Type assertions
var someValue = "this is a string";
var strLength = someValue.length;
var someValue2 = "this is also a string";
var strLength2 = someValue.length;
