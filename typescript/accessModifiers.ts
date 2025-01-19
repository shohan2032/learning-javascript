class user {
    private userID: number;
    protected isActive: boolean = true;
    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
        this.userID = Math.random();
    }

    private print() {
        console.log(`Name: ${this.name}, Age: ${this.age}, User ID: ${this.userID}`);
    }
}

class subUser extends user {
    constructor(name: string, age: number) {
        super(name, age);
        console.log(`Is active: ${this.isActive}`);
    }
}

let u = new user("John Doe", 30);
console.log(u);
// console.log(print());
// u.userID = 34; // not allowed

let su = new subUser("Jane Doe", 25);
console.log(su);
