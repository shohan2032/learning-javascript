//Date
    let myDate = new Date();
    console.log(myDate);
    console.log(myDate.toString());
    console.log(myDate.toDateString());
    console.log(myDate.toLocaleString());
    console.log(myDate.toLocaleDateString());
    console.log(typeof myDate);

    let myCreatedDate = new Date(2024, 11, 2);//month start from 0 in javascript
    console.log(myCreatedDate.toDateString());
    myCreatedDate = new Date("02-12-2024");
    console.log(myCreatedDate.toLocaleString());

//TimeStamp
    let myTimeStamp = Date.now();
    console.log(myTimeStamp);//return total milisecond
    console.log(myCreatedDate.getTime());//return total milisecond
    console.log(Math.floor((Date.now()/1000)));//return in seconds
    console.log(`${myCreatedDate.getDate()}-${myCreatedDate.getMonth()}-${myCreatedDate.getFullYear()}`);
    let newDate = new Date();
    newDate.toLocaleString('default', {
        weekday: "long"
    });
    console.log(newDate);