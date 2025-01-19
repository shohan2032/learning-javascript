var one = [];
var two = [];
function func1(val) {
    return val;
}
function func2(val) {
    return val;
}
// with generic type variable functions
function genericFunc(val) {
    return val;
}
console.log(genericFunc(10)); // output: 10
console.log(genericFunc("hello")); // output: hello
function genericTwo(val) {
    return val;
}
console.log(genericTwo({ name: "shohan" }));
// generic type array 
function getProduct(val) {
    return val[0];
}
// some thing with arrow functions
var arrowFunction1 = function (val) {
    return val[0];
};
var arrowFunction2 = function (val) {
    return val[0];
};
console.log(arrowFunction1([1, 2, 3])); // output: 1
// multiple generics type variable
function func3(val1, val2) {
    return { a: val1, b: val2 + 1 };
}
console.log(func3(10, 5)); // output: {a: 10, b: 15}
console.log(func3(19, 3));
var sellable = /** @class */ (function () {
    function sellable() {
        this.cart = [];
    }
    sellable.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    return sellable;
}());
var courseCart = new sellable();
courseCart.addToCart({ title: "typescript", author: "bob", subject: "programming" });
var quizCart = new sellable();
quizCart.addToCart({ question: "what is ts?", answer: "type script" });
console.log(courseCart.cart);
console.log(quizCart.cart);
// go through this link for documentation https://www.typescriptlang.org/docs/handbook/2/generics.html
