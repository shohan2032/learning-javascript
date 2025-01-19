let greeting: string = "hello world";
console.log(greeting);
greeting.toLowerCase();

// number
let age: number = 30;
// let age = 30; // if you initialize the value then we dont need to give the type
console.log(age);

// boolean
let isLoggedIn: boolean = true;
console.log(isLoggedIn);

// any
let hero;
function getHero(){
    return "hero";
}
hero = getHero();



export {}