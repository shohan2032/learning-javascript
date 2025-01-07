// singleton -> means that the constructor can only be called once
    // object.create; 
    const tinderUser = new Object();
    tinderUser.name = 'John';
    tinderUser.age = 30;
    tinderUser.gender ='male';
    tinderUser.likes = ['apple', 'banana', 'cherry'];
    tinderUser.greeting = function() {
        console.log(`Hello ${this.name}`);
    }
    console.log(tinderUser);


// Object literal
    const mySym = Symbol ("shohan");
    let obj = {
        name: 'John',
        age: 30,
        "full name" : 'John Doe',
        [mySym]: 'secret', 
        address : {
            street: '123 Main St',
            city: 'New York'
        },
    };
    // console.log(Object.keys(obj))
    // console.log(Object.values(obj))
    // console.log(Object.entries(obj)) // it will return an array of arrays of key value pairs
    // console.log(obj.hasOwnProperty('isLogged'));
    // console.log(obj[mySym]);
    // console.log(obj["full name"]);
    // console.log(obj.name);
    // obj.age = 56;
    // console.log(obj.age);
    // Object.freeze(obj); // it will make the object immutable that means we can't change the value of the object
    // obj.age = 30;
    // console.log(obj.age);
    // console.log(obj);
    console.log(obj.address.city);
    console.log(obj.dsjfh? 'yes' : 'no');

    obj.greeting = function() {
        console.log(`Hello ${this.name}`);
    }
    obj.greeting();
    console.log(typeof obj.greeting);

    const obj1 = { name: 'John'};
    const obj2 = { age: 30};
    // const obj3 = Object.assign({}, obj1, obj2);// adding {} is a good practice 
    const obj3 = {...obj1, ...obj2}; 
    console.log(obj3);

    // array of object
    const users = [
        { id: 1, name: 'John'},
        { id: 2, name: 'Jane'},
        { id: 3, name: 'Sarah'},
    ];
    console.log(users[0].id);

    // combination of objects and functions
    function getUser(anyobject) {
        console.log(`User name is ${anyobject.name} and age is ${anyobject.age}`);
    }
    getUser({
        name: 'John',
        age: 30,
    });

// object de-structuring
    const course = {
        title: 'JavaScript',
        duration: '3 months',
        price: 3000,
    }
    const {title, duration: time, price} = course;
    console.log(title);
    console.log(time);

// JSON API
    const data = `{"name": "John", "age": 30}`;
    const parsedData = JSON.parse(data);
    console.log(parsedData);
    const stringifiedData = JSON.stringify(parsedData);
    console.log(stringifiedData);

    // fetch api to get data from a server
    const url = `https://randomuser.me/api/`;
    fetch(url)
        .then(response => response.json())
        .then(parsedData => {
            console.log(parsedData);
            const stringifiedData = JSON.stringify(parsedData);
            console.log(stringifiedData);
        })
        .catch(error => console.error('Error fetching data:', error));



