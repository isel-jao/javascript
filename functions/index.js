"use strict";

// Function expressions

function func(arg1, arg2, argN) {
	// body
}

let func = function (arg1, arg2, argN) {
	// body
};

// Arrow functions
let func = function (arg1, arg2, argN) {
	return expression;
};

let func = (arg1, arg2, argN) => expression

// Multiline arrow functions

let sum = (a, b) => {  // the curly brace opens a multiline function
	let result = a + b;
	return result; // if we use curly braces, then we need an explicit "return"
  };


