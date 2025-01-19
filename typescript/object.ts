// function createUser({username: string, password: string}):void {
    
// }

// const user = createUser({username: 'John Doe', password: 'password123'});
// let us = {username: 'John Doe', password: 'password', email: 'john@gmail.com'};
// createUser(us);
// function makeUser():{ username: string, password: string } { // returning an object 
//     return {
//         username: 'John Doe',
//         password: 'password123'
//     };
// }
// const u = makeUser();

// type allias 
type User = {
    readonly _id: string, // id of the user object can not be changed
    username: string,
    password: string,
    creditCardDetails?: number // optional
}

function createUser(user: User):User {
    return {_id: "123",username: "shohan", password: '1233'}
}

createUser({_id:"123",username: 'John Doe', password: '2343'});

let myUser: User = {
    _id: "123",
    username: "John Doe",
    password: '1233',
}

myUser.username = "shohan";
// myUser._id = 34; // can not be over written as it is read only


type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & { // creating new type by combining multiple previously created type and with new one
    cardCVV: number
}

export {}