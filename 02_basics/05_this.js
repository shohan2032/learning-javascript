// this refers to the current state of the object that is the current context.
const user = {
    username: "shohan",
    age: 3,
    welcomeMessage: function(){
        console.log(`Hello ${this.username}`);
    }
}
user.welcomeMessage();
user.username = "John";
user.welcomeMessage();

console.log(this);

function testThis(){
    console.log(this);
}
testThis();