// union types
type Status = 'pending' | 'success' | 'error';

type User = {
    id: number,
    name: string,
    status: Status,
};

let value: string | number = 55;
value = "shohan";
// value = true;// not allowed

type Admin = {
    id: number,
    name: string,
    role: 'admin',
}

let shohan: User | Admin = { id: 55, name:"shohan", role: 'admin' };

// array
let arr: number[] = [1,2,3]
let arrStr: string[] = ['sdjf','sdfh']

let a: number[] | string[] = ["d","r"] // either all numbers or all strings
let b:(number | string)[] = [1,2,3,'d','r'] // both string and number