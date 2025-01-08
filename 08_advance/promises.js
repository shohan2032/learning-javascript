const promiseOne = new Promise((resolve,reject) => {
    // do an async task
    // db call , cryptography, network task
    setTimeout(() => {
        console.log("Async task is done");
        resolve();
    },1000)
})

promiseOne.then(() => { // if promiseOne is resolved,(then) will be called immediately
    console.log("Promise One resolved");
})

// ----------------------------------------------------------------

new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    },1000)
}).then(() => {
    console.log("Async task 2 done");
});

// ----------------------------------------------------------------

const promiseThree = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve({username: "test", password: "123"});
    },1000)
})

promiseThree.then((data) => {
    console.log("Promise Three resolved");
    console.log(data);
});


// ----------------------------------------------------------------

const promiseFour = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = false;
        if(!error) {
            resolve({username:"shohan", password: "fsdjhf"});
        } else {
            reject('ERROR: Something went wrong');
        }
    },1000)
})

promiseFour.then((data) => {
    console.log("Promise Four resolved");
    console.log(data);
    return data.username;
}).then((username) => {
    console.log(`Hello ${username}`);
}).catch((error) => {
    console.error(error);
}).finally(() => console.log("The promise is either resolved or rejected"))
// this is called chaining the promises

// ------------------------------------------------------------

const promiseFive = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = true;
        if(!error) {
            resolve({username:"arman", password: "dfd"});
        } else {
            reject('ERROR: Something went wrong');
        }
    },1000)
})

const consumePromiseFive = async () => { //async can not handle error (catch block) directly
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

// ----------------------------------------------------------------

const getAllUsers = async () => {
    try {
        // response type of fetch is promise
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

getAllUsers();

// ----------------------------------------------------------------

fetch('https://api.github.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.error('Error:', error);
});

// ----------------------------------------------------------------
 