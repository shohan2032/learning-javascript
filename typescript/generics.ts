const one:Array<number> = [];
const two: Array<string> = [];

function func1(val:number):number {
    return val;
}

function func2(val: any): any {
    return val;
}

// with generic type variable functions
function genericFunc<T>(val: T): T {
    return val;
}

console.log(genericFunc<number>(10)); // output: 10
console.log(genericFunc<string>("hello")); // output: hello


// generic type variable function using interface
interface type {
    name: string;
}
function genericTwo<type>(val: type): type{
    return val;
}
console.log(genericTwo<type>({ name: "shohan" }));

// generic type array 
function getProduct<T>(val: T[]): T {
    return val[0];
}

// some thing with arrow functions
const arrowFunction1 = <T>(val: T[]): T => {
    return val[0];
}

const arrowFunction2 = <T,>(val: T[]): T => { // this , character tells that it is a generics tag
    return val[0];
}
console.log(arrowFunction1([1, 2, 3])); // output: 1

// multiple generics type variable
function func3<T,U extends number>(val1:T, val2:U):object { // here we can extend the U to our interface type also
    return {a: val1, b: val2 + 1};    
}
console.log(func3<number, 5>(10, 5)); // output: {a: 10, b: 15}
console.log(func3(19,3)); 
// console.log(func3(12,"23")); // will give error as second parameter should be number

// generics in class
    interface quiz {
        question: string;
        answer: string;
    }
    interface course {
        title: string;
        author: string;
        subject: string;
    }

    class sellable<T>{
        public cart:T[] = [];

        addToCart(product:T){
            this.cart.push(product);
        }
    }
    const courseCart = new sellable<course>();
    courseCart.addToCart({title: "typescript", author: "bob", subject: "programming"});
    const quizCart = new sellable<quiz>();
    quizCart.addToCart({question: "what is ts?", answer: "type script"});
    console.log(courseCart.cart);
    console.log(quizCart.cart);

// go through this link for documentation https://www.typescriptlang.org/docs/handbook/2/generics.html