let myTuple: [number,string,boolean];
myTuple = [1, "hello", true]; // order matters
myTuple[0] = 10;
myTuple[1] = "world";
myTuple[2] = false;
// myTuple = ["hello", 2, true]; // error
// myTuple[0] = "world"; //  error
type user = [number,string,boolean];
let userTuple:user = [1, "hello", true];
userTuple.push(true); // this is not a great idea but it works


// https://stackoverflow.com/questions/64069552/typescript-array-push-method-cant-catch-a-tuple-type-of-the-array
