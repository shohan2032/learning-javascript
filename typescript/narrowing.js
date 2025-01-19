function detect(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        throw new Error("id is required");
    }
    return id.toLowerCase();
}
console.log(provideId("Qdsa"));
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                var s = strs_1[_i];
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
} // for this function we have not checked the empty string case. so always we have to check all the cases 
// using instanceof
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim != undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
var myPet = { swim: function () { return console.log("swimming"); } };
console.log(getFood(myPet));
function area(shape) {
    switch (shape.kind) {
        case "square":
            return shape.size * shape.size;
        case "rectangle":
            return shape.width * shape.height;
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        default:
            var defaultShape = shape;
            return defaultShape;
    }
}
// documentation https://www.typescriptlang.org/docs/handbook/2/narrowing.html
