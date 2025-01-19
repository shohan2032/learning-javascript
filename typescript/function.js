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
console.log(getUpper("4")); // not allowed
console.log(getUpper("hello")); // allowed
