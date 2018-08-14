// TypeScript basic types
// http://www.typescriptlang.org/docs/handbook/basic-types.html
// Andrew Garner 8/14/18

// Boolean
let isDone: boolean = false


// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;


// String
let color: string = "blue";
color = 'red'

let fullName: string = "Bob Bobbington";
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName}.

I'll be ${ age + 1 } years old next month.`;


// Arrays
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];


// Tuple
let x: [string, number];
x = ["Hello", 10];

// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

let colorName: string = Color[2];


// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;


// Void
function warnUser(): void {
	console.log("This is a warning message");
}
let unusable: void = undefined;
let unusable2: void = null;

// Never
// Function returning never must have unreachable end point
function error(message: string): never {
	throw new Error(message);
}

// Inferred return type is never
function fail() {
	return error("Something Failed");
}

function infiniteLoop(): never {
	while (true) {
	}
}

// Object
declare function create(o: object | null): void;

create({ prop: 0});
create(null)

// Type assertions
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

let someValue2: any = "this is also a string";
let strLength2: number = (someValue as string).length;



