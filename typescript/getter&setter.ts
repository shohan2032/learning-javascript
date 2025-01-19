class user {
    private _id: number = 1;
    get id(): number {
        return this._id;
    }
    set id(value:number) { // set doesn't have any return type
        this._id = value;
    }
}

let u = new user();
u.id = 123;
console.log(u.id); // output: 123