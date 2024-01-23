// to use new version of java script we us"use strict";
//alert is used in browser but not in node
// String: Represents a sequence of characters.
let str = "Hello, World!";

//Print it by 
console.log(str);

// Number: Represents numeric values. It includes integers and floating-point numbers.

let num = 42;
let floatNum = 3.14;


// Boolean: Represents a logical value, either true or false.
let isTrue = true;
let isFalse = false;


// Undefined: Represents an uninitialized variable or an object property that does not exist.
let undefinedVar;

// Null: Represents the intentional absence of any object value.
let nullVar = null;

// Symbol: Introduced in ECMAScript 6 (ES6), symbols represent a unique identifier.
let sym = Symbol("@");




// Objects are complex data types that can store key-value pairs. They are used to represent and organize data.

let person = {
  name: "John",
  age: 30,
  isStudent: false
};


// Arrays are a special type of object that holds an ordered list of values.
let fruits = ["apple", "orange", "banana"];



// Functions are a special type of object that can be invoked (called) to perform a task.

function greet(name) {
    return "Hello, " + name + "!";
  }
  