// Primitive DataType -> use stack memory
    //Number 
    let age = 12;

    //string 
    let name = "shohan";
    
    //Boolean
    let ok = true;

    //undefined
    let x;

    //null
    let y = null;

    //bigInt
    let a = BigInt("134247643287328787230740321740327407230470327");
    let aa = 234723472374972397n;

    //symbol -> same value but unique
    let b = Symbol("Hello!");
    let bb = Symbol("Hello!");

    console.log(b===bb);//output false
    console.table([typeof age,typeof name,typeof ok,typeof x,typeof y,typeof a,typeof b]);

//Non-Primitive(Referece -> it gets the reference/address of the memory) DataType -> use heap memory
    //object 
    const student = {
        name: "Shohanh",
        age: 24,
        cgpa: 3.67,
        isPass: true
    };
    console.log(typeof student);
    // console.table([student.age,student["age"],])
    // student.age = student.age + 1;
    // console.table([student.age,typeof student,typeof student.isPass]);
    
    //array 
    const aboutMe = ["shohan","DevOps Engineer", "major-CSE"];
    console.log(typeof aboutMe);

    //function
    const myFunction = function(){
        console.log(typeof myFunction);
    }
    myFunction();

    // https://262.ecma-international.org/5.1/#sec-11.4.3
