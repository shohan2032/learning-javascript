// Immediately Invokes Function Expression (IIFE) for 

// named IIFE functions
(function greet(){
    console.log("Hello World");
})();

// first () for creating the function block
// second () for invoking the function block immediately

//using arrow functions (unnamed IIFE functions)
((name)=>{
    console.log(`Hello ${name}`);
})("shohan");
