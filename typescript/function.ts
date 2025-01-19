function add(num: number): number{
    return  num+2;
}
// console.log(add("4"));  // not allowed
console.log(add(4));  // allowed

function getUpper(val: string) {
    return val.toUpperCase();
}
// console.log(getUpper("4")); // not allowed
console.log(getUpper("hello")); // allowed

function signUpUser(user: string, password: string) {

}
// signUpUser("john", 6); // not allowed
signUpUser("john", "secret123"); // allowed



function hello(val: string): string {
    return "Hello " + val;
}

console.log(hello("shohan"));

function manyReturnType(val: number) {
    if (val % 2 === 0) {
        return true;
    } else {
        return "Odd";
    }
}

const getHello = (str: string):string => {
    return "hello " + str;
}

const heros = ['thor', 'spiderman', 'batman']
heros.map((hero):string => {
    return `hero is ${hero}.`;
})

function consoleError(errMsg: string):void{
    console.log(errMsg);
}

function handleError(errMsg: string):never{
    throw new Error(errMsg);
}

function multipleargumentType(val: string | number) {
    if(typeof val === 'number') {
        return val * 2;
    } else {
        return val + " world";
    }
}
console.log(multipleargumentType("shohan"));
console.log(multipleargumentType(2));
export {}