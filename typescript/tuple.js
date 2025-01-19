var myTuple;
myTuple = [1, "hello", true]; // order matters
myTuple[0] = 10;
myTuple[1] = "world";
myTuple[2] = false;
var userTuple = [1, "hello", true];
userTuple.push(true); // this is not a great idea but it works
// https://stackoverflow.com/questions/64069552/typescript-array-push-method-cant-catch-a-tuple-type-of-the-array
