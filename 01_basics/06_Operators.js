//Arithmetic Operators
    let a = 5;
    let b = 6;

    console.log("a = ",a, " & b = ",b);
    console.log("a + b", a + b);
    console.log("a - b = ",a - b);
    console.log("a * b = ",a * b);
    console.log("a / b = ",a / b);
    console.log("a % b = ",a % b);
    console.log(" a ** b = ", a ** b); // 5^6

//Unary Operators
    a++;
    b--;
    console.log(a);
    console.log(b);

//Assignment Operators
    // =   +=   -=    *=   /=   %=    **=

//comparison operators
    // == equal to
    let x = 5;
    let y = 6;
    console.log("x == y", x == y);
    y = "5";
    console.log("x == y", x == y);//First y converted to number from string,then comparison happended

    // === equal to and type (strict comparison. Type has to be same)
    console.log("x == y", x === y);//as x and y have different type, it will give output false

    // != not eual to
    // !== not equal to and type (strict comparison)
    // >, >=, <, <=

//logical Operators -> return true or false
    let cond1 = a > b;
    let cond2 = a == b;
    // && and
    console.log("cond1 and cond2 = ",cond1&&cond2);
    
    // || or
    console.log("cond1 or cond2 = ",cond1||cond2);

    // ! NOT
    console.log("!(6 < 5) = ",!(6 < 5));