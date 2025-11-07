//1. Reverse the order of array 'a' into array 'b' without mutating 'a'
    let a = [1, 2, 3, 4, 5];
    // let b = a.reverse(); // This mutates 'a' because reverse() modifies the array in place
    let b = [...a].reverse();
    console.log(a, b);

//2. Reverse an string
    let str = "hello";
    let reversedStr = str.split("").reverse().join("");
    console.log(str, reversedStr);

//3. Check if a variable is an array
    let arr = [1, 2, 3];
    let isArray = Array.isArray(arr);
    console.log(isArray);

//4.Hosting in JS --> Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top.
//   This means that irrespective of where the variables and functions are declared, they are moved on top of the scope. The scope can be both local and global.
    // EX:1
    hoistedVariable = 3;
    console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized
    var hoistedVariable;

    // EX:2
    hoistedFunction(); // Outputs " Hello world! " even when the function is declared after calling
    function hoistedFunction() {
    console.log(" Hello world! ");
    }

    // EX:3
    // Hoisting takes place in the local scope as well
    function doSomething() {
    x = 33;
    console.log(x);
    var x;
    }
    doSomething(); // Outputs 33 since the local variable “x” is hoisted inside the local scope

    // Note - Variable initializations are not hoisted, only variable declarations are hoisted:
    var x;
    console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
    x = 23;

    // Note - To avoid hoisting, you can run javascript in strict mode by using “use strict” on top of the code:
    "use strict";
    x = 23; // Gives an error since 'x' is not declared
    var x; 

//5. Difference between “ == “ and “ === “ operators.
    // Both are comparison operators. The difference between both the operators is that “==” is used to compare values whereas, “ === “ is used to compare both values and types.
    let num1 = 5; // number
    let num2 = "5"; // string
    console.log(num1 == num2); // true because values are equal
    console.log(num1 === num2); // false because types are different

//6. Difference between var and let keyword in javascript.
    // 'var' is function-scoped, while 'let' is block-scoped.
    // Variables declared with 'var' can be redeclared and updated, while 'let' variables can be updated but not redeclared in the same scope.
    // 'var' declarations are hoisted and initialized with 'undefined', while 'let' declarations are hoisted but not initialized.
    function varLetExample() {
        if (true) {
            var x = 10; // function-scoped
            let y = 20; // block-scoped
        }
        console.log(x); // 10
        // console.log(y); // ReferenceError: y is not defined
    }
    varLetExample();

//7. Explain Implicit Type Coercion in javascript.
    // Implicit Type Coercion in JavaScript refers to the automatic conversion of values from one data type to another during operations. 
    // This occurs when operators are applied to values of different types, 
    // leading JavaScript to convert one or both values to a common type to perform the operation.
    // -- String coercion: String coercion takes place while using the ‘ + ‘ operator. When a number is added to a string, the number type is always converted to the string type.
    let result1 = '5' + 10; // '10' is converted to string
    console.log(result1); // Outputs '510'

    // -- Numeric coercion: Numeric coercion takes place while using operators like ‘ - ‘, ‘ * ‘, ‘ / ‘ etc. When a string is used with these operators, JavaScript converts the string to a number type.
    let result2 = '20' - 5; // '20' is converted to number
    console.log(result2); // Outputs 15

    // -- Boolean coercion: Boolean coercion occurs in contexts that expect a boolean value, such as conditional statements. Values like 0, "", null, undefined, and NaN are coerced to false, while all other values are coerced to true.
    let result3 = !!'hello'; // non-empty string is truthy
    console.log(result3); // Outputs true

    // -- Equality coercion: When using the ‘ == ‘ operator, JavaScript performs type coercion to compare values of different types.
    let result4 = 5 == '5'; // '5' is converted to number
    console.log(result4); // Outputs true
    // Coercion does not take place when using the ‘===’ operator. Both operands are not converted to the same type in the case of ‘===’ operator.
    let result5 = 5 === '5';
    console.log(result5); // Outputs false

//8. Is javascript a statically typed or a dynamically typed language?
    // JavaScript is a dynamically typed language. This means that variable types are determined at runtime and can change as the program executes. 
    // Variables in JavaScript can hold values of any type, and the type of a variable can change based on the value assigned to it. For example:
    let variable = 42; // variable is a number
    console.log(typeof variable); // Outputs "number"
    variable = "Hello, World!"; // variable is now a string
    console.log(typeof variable); // Outputs "string"

//9. What is NaN property in JavaScript?
    // NaN stands for "Not-a-Number". It is a special numeric value in JavaScript that represents an undefined or unrepresentable value, especially in mathematical operations.
    // NaN is of type 'number', but it is not equal to any value, including itself.
    let resultNaN = 0 / 0; // This operation results in NaN
    console.log(resultNaN); // Outputs NaN
    console.log(typeof resultNaN); // Outputs "number"
    console.log(resultNaN === NaN); // Outputs false

    // To check if a value is NaN, you can use the isNaN() function or Number.isNaN() method:
    console.log(isNaN(resultNaN)); // Outputs true
    console.log(Number.isNaN(resultNaN)); // Outputs true

    isNaN("Hello")  // Returns true
    isNaN(345)   // Returns false
    isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
    isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
    isNaN(false) // Returns false
    isNaN(undefined) // Returns true

//10. Explain passed by value and passed by reference.
    // In JavaScript, primitive data types (such as numbers, strings, booleans, null, undefined, and symbols) are passed by value. 
    // This means that when you assign a primitive value to a variable or pass it to a function, a copy of the value is created. 
    // Changes made to the copy do not affect the original value.
    let x = 10;
    let y = x; // y is a copy of x
    y = 20; // Changing y does not affect x
    console.log(x); // Outputs 10
    console.log(y); // Outputs 20

    // On the other hand, objects (including arrays and functions) are passed by reference. 
    // When you assign an object to a variable or pass it to a function, you are passing a reference to the original object. 
    // Changes made to the object through one reference will affect the original object.
    let obj1 = { name: "Alice" };
    let obj2 = obj1; // obj2 is a reference to obj1
    obj2.name = "Bob"; // Changing obj2 affects obj1
    console.log(obj1.name); // Outputs "Bob"
    console.log(obj2.name); // Outputs "Bob"

//11. What is an Immediately Invoked Function in JavaScript?
    // An Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined.
    // It is a design pattern that is often used to create a private scope for variables and functions, preventing them from polluting the global scope.
    (function() {
        console.log("This function runs immediately upon definition!");
    })(); // Outputs: This function runs immediately upon definition!

    // Arrow function IIFE
    (() => {
        console.log("This arrow function runs immediately upon definition!");
    })(); // Outputs: This arrow function runs immediately upon definition!

    // While executing javascript code, whenever the compiler sees the word “function”, it assumes that we are declaring a function in the code.
    // Therefore, if we do not use the first set of parentheses, the compiler throws an error because it thinks we are declaring a function, and by the syntax of declaring a function, a function should always have a name.
    // To remove this error, we add the first set of parenthesis that tells the compiler that the function is not a function declaration, instead, it’s a function expression.
    // The second set of parenthesis:
    // From the definition of an IIFE, we know that our code should run as soon as it is defined. 
    // A function runs only when it is invoked. If we do not invoke the function, the function declaration is returned:
    (function (){
    // Do something;
    })
    // Returns the function declaration
    // Therefore to invoke the function, we use the second set of parenthesis.

//12.  What do you mean by strict mode in javascript and characteristics of javascript strict-mode?
    // Strict mode is a feature in JavaScript that allows you to place a program, or a function, in a "strict" operating context.
    // This strict context prevents certain actions from being taken and throws more exceptions.
    // The purpose of strict mode is to make it easier to write "secure" JavaScript.

    // Characteristics of Strict Mode:
    // 1. Eliminates some JavaScript silent errors by changing them to throw errors.
    // 2. Fixes mistakes that make it difficult for JavaScript engines to perform optimizations.
    // 3. Prohibits some syntax likely to be defined in future versions of ECMAScript.

    // To enable strict mode for an entire script, put the exact statement "use strict"; before any other statements.
    "use strict";
    // Example of strict mode:
    function strictModeExample() {
        "use strict";
        // x = 3.14; // This will cause an error because x is not declared
        let x = 3.14; // Correct way
        console.log(x);
    }
    strictModeExample();

// 13. Explain Higher Order Functions in javascript.
    // A higher-order function is a function that either takes one or more functions as arguments, returns a function as its result, or both.
    // Higher-order functions are a key feature of functional programming and allow for more abstract and flexible code.

    // Example 1: A function that takes another function as an argument
    function display(msg) {
        console.log(msg);
    }
    function higherOrderFunction(func, value) {
        func(value);
    }
    higherOrderFunction(display, "Hello, Sir!"); // Outputs: Hello, Sir!

    function map(arr, func) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(func(arr[i]));
        }
        return result;
    }
    let numbers = [1, 2, 3, 4];
    let doubled = map(numbers, function(x) { return x * 2; });
    console.log(doubled); // Outputs [2, 4, 6, 8]

    // Example 2: A function that returns another function
    function makeMultiplier(factor) {
        return function(x) {
            return x * factor;
        };
    }
    let double = makeMultiplier(2);
    console.log(double(5)); // Outputs 10

    // Example 3: Using built-in higher-order functions
    let nums = [1, 2, 3, 4, 5];
    let squared = nums.map(x => x * x); // map is a higher-order function
    console.log(squared); // Outputs [1, 4, 9, 16, 25]  

// 14. Explain “this” keyword.
    // In JavaScript, the "this" keyword refers to the object that is currently executing the code.
    // The value of "this" is determined by how a function is called, and it can vary depending on the context.

    // Global Context
    console.log(this); // In a browser, this refers to the window object

    // Function Context
    function showThis() {
        console.log(this);
    }
    showThis(); // In non-strict mode, this refers to the global object (window in browsers)

    // Object Method Context
    const obj = {
        name: "Alice",
        greet: function() {
            console.log(this.name);
        }
    };
    obj.greet(); // Outputs "Alice", this refers to obj

    // Constructor Function Context
    function Person(name) {
        this.name = name;
    }
    const person1 = new Person("Bob");
    console.log(person1.name); // Outputs "Bob", this refers to the new instance

    // Arrow Function Context
    const arrowFunc = () => {
        console.log(this);
    };
    arrowFunc(); // Inherits this from the enclosing scope (global in this case)

    // Explicit Binding
    function sayHello() {
        console.log(this.name);
    }
    const user = { name: "Charlie" };
    sayHello.call(user); // Outputs "Charlie", this is explicitly set to user
    sayHello.apply(user); // Outputs "Charlie", this is explicitly set to user

    const boundFunc = sayHello.bind(user);
    boundFunc(); // Outputs "Charlie", this is permanently bound to user

//15. Explain call(), apply() and, bind() methods.
    // In JavaScript, call(), apply(), and bind() are methods that allow you to set the value of "this" in a function.

    // call(): The call() method calls a function with a given "this" value and arguments provided individually.
    // This method invokes a method (function) by specifying the owner object.
    // EX1:
    function greet(greeting, punctuation) {
        console.log(greeting + ', ' + this.name + punctuation);
    }
    const personA = { name: 'Alice' };
    greet.call(personA, 'Hello', '!'); // Outputs: Hello, Alice!

    // EX2:
    function sayHello(){
        return "Hello " + this.name;
    } 
    var obj3 = {name: "Sandy"};       
    sayHello.call(obj3); // Returns "Hello Sandy"

    // EX3:
    let obj4 = {
        age: 25,
        getAge: function() {
            console.log(this.age);
        }
    }
    let obj5 = { age: 30 };
    obj4.getAge.call(obj5)
    	
    // apply(): The apply() method is similar to call(), but it takes arguments as an array (or an array-like object).
    const personB = { name: 'Bob' };
    greet.apply(personB, ['Hi', '.']); // Outputs: Hi, Bob.

    // bind(): The bind() method creates a new function that, when called, has its "this" keyword set to the provided value. 
    // It does not invoke the function immediately; instead, it returns a new function.
    const personC = { name: 'Charlie' };
    const boundGreet = greet.bind(personC, 'Hey');
    boundGreet('!!!'); // Outputs: Hey, Charlie!!!

    // Summary:
    // - call() and apply() invoke the function immediately with a specified "this" value.
    // - bind() returns a new function with a specified "this" value that can be called later.