"use strict";
// function createUser({username: string, password: string}):void {
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return { _id: "123", username: "shohan", password: '1233' };
}
createUser({ _id: "123", username: 'John Doe', password: '2343' });
var myUser = {
    _id: "123",
    username: "John Doe",
    password: '1233',
};
myUser.username = "shohan";
