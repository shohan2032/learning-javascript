const userEmail1 = "user@example";
const userEmail2 = "";
if(userEmail1){
    console.log("You are logged in");
}
else{
    console.log("Please enter a valid email address");
}

if(userEmail2){
    console.log("You are logged in");
}
else{
    console.log("Please enter a valid email address");
}

// falsy values -> false, 0, "", '', ``, null, undefined, NaN
// truthy values -> everything else other than falsy values. "0",'false'," ",[],{},function(){}

const obj = {};
if(Object.keys(obj).length === 0){
    console.log("Object is empty");
}

// Nulish Coalescing Operator (??): null undefined
    let val;
    val = 5 ?? 10;
    console.log(val);
    val = null ?? 10;
    console.log(val);

    val = undefined ?? 10;
    console.log(val);
    val = null ?? "shohan" ?? 19;
    console.log(val);

//ternary operator -> condition ? true : false
    const value = 1 < 2 ? "true" : "false";
    console.log(value);
