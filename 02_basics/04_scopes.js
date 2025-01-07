let a = 500
var b = 566
if(true){
    let a = 200
    console.log(a)
    var b = 3
}
console.log(a)
console.log(b)

function one() {
    const username = "shohan";
    function two(){
        console.log(username) // for this function username is global scope variable
        const age = 3;
    }
    console.log(age);// here age is a block scope variable
    two();
}
one();