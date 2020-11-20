"use strict";
// c?: optional
// c: number = 10 default
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(1, 5, 20);
var minus = function (a, b) {
    return a - b;
};
var result = minus(10, 7);
console.log(result);
var greetOne = function (user) {
    console.log(user.name + " says hello");
};
var greet;
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
var calc;
calc = function (numOne, numTwo, action) {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old.");
};
