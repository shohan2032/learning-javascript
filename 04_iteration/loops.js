//for loop
    for(let i = 1;i <= 10;i++){
        console.log("Hi!");
    }

//while loop
    let i = 1;
    while(i <= 5)
    {
        console.log("hi!");
        i++;
    }

//do-while loop
    let x = 1;
    do{
        console.log("Hi!");
        x++;
    } while(x <= 10);

//for-of loop
    const myName = new String("Shohan");
    for(let val of myName)
    {
        console.log(`${val}\n`);
    }

//for-in loop -> it is used to loop in object
    let student = {
        name: "Shohan",
        cgpa: 3.67,
        isPas: false,
        age: 24
    };
    for(let key in student)
    {
        console.log("Key = ",key,",value = ",student[key]);
    }

//forEach loop -> it is used to loop in array. only works in array
    //forEach is higher order function that takes a callBackFunction as an argument
    const arr = [1,2,3,4,5];
    arr.forEach((element,index) => {
        console.log(`Element = ${element}, Index = ${index}`);
    });

    // array of objects
    const item = [
        {
            name: "Shohan",
            age: 24
        },
        {
            name: "arman",
            age: 25
        },
        {
            name: "rahim",
            age: 26
        }
    ]

    item.forEach((element)=>{
        console.log(`name: ${element.name}, age: ${element.age}`);
    })

// practice problem -> create a game where you start with any random game number. Ask the user to keep guessing the game number untill the user enters correct value.
    const gameNumber = 9;
    let numberFromUser = prompt("Guess the number:");
    while(numberFromUser != gameNumber)
    {
        numberFromUser = prompt("Wrong Number.Guess Again: ");//prompt return a string
    }
    alert("Nice!You won the game.");
