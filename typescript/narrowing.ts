function detect(val: number | string): number | string{
    if(typeof val === "string") {
        return val.toLowerCase();
    }
    return val+3;
}

function provideId(id:string | null) {
    if(!id) {
        throw new Error("id is required");
    }
    return id.toLowerCase();
}
console.log(provideId("Qdsa"));

function printAll(strs: string | string[] | null) {
    if (strs) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
} // for this function we have not checked the empty string case. so always we have to check all the cases 

// using instanceof
function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
    } else {
      console.log(x.toUpperCase());
    }
}

// Using type predicates
type Fish = {swim: () => void};
type Bird = {fly: () => void};
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim != undefined;
}

function getFood(pet: Fish | Bird) {
    if(isFish(pet)) {
        pet
        return "fish food";
    } else {
        pet
        return "bird food";
    }
}
const myPet: Fish = { swim: () => console.log("swimming") };
console.log(getFood(myPet));

// Discriminated unions
interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(shape: Shape): number {
    switch (shape.kind) {
        case "square":
            return shape.size * shape.size;
        case "rectangle":
            return shape.width * shape.height;
        case "circle":
            return Math.PI * shape.radius ** 2;
        default:
            const defaultShape:never = shape;
            return defaultShape;
    }
}




// documentation https://www.typescriptlang.org/docs/handbook/2/narrowing.html