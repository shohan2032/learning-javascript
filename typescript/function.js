"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(num) {
    return num + 2;
}
// console.log(add("4"));  // not allowed
console.log(add(4)); // allowed
function getUpper(val) {
    return val.toUpperCase();
}
// console.log(getUpper("4")); // not allowed
console.log(getUpper("hello")); // allowed
function signUpUser(user, password) {
}
// signUpUser("john", 6); // not allowed
signUpUser("john", "secret123"); // allowed
function hello(val) {
    return "Hello " + val;
}
console.log(hello("shohan"));
function manyReturnType(val) {
    if (val % 2 === 0) {
        return true;
    }
    else {
        return "Odd";
    }
}
var getHello = function (str) {
    return "hello " + str;
};
var heros = ['thor', 'spiderman', 'batman'];
heros.map(function (hero) {
    return "hero is ".concat(hero, ".");
});
function consoleError(errMsg) {
    console.log(errMsg);
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
function multipleargumentType(val) {
    if (typeof val === 'number') {
        return val * 2;
    }
    else {
        return val + " world";
    }
}
console.log(multipleargumentType("shohan"));
console.log(multipleargumentType(2));
