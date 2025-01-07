//array 
    const myArr = [0,1,2,3,4,5];
    const myHeros = ["SW","sh"];

    const myArr2 = new Array(1, 3, 0, 1, 2)
    // console.log(myArr[1]);
    // console.log(myHeros[0]);

//array method
    // myArr.push(6);
    // console.log(myArr);

    // console.log(myArr.length);
    // console.log(myArr.indexOf(3));

    // myArr.pop(); // remove the last element
    // console.log(myArr);

    // myArr.shift(); // remove the first element
    // console.log(myArr);

    // myArr.unshift(0); // add 0 to the start of the array
    // console.log(myArr);

    // console.log(myArr.slice(1, 3)); // slice the array from index 1 to 2 (exlcued the last index)
    // console.log(myArr.splice(1, 3)); // splice the array from index 1 to 3 (including the last index)
    // console.log(myArr);

    // console.log(myArr.concat(myHeros)); // concat the array with another array
    
    // console.log(myArr.reverse());
    // console.log(myArr2.sort());
    // console.log(myArr.join()); // join the array with comma separated values.type is strings
    // console.log(myArr.join(' '));
    // console.log(myArr.includes(11));

    // myArr.push(myArr2);
    // console.log(myArr);

    // const newArr = myArr.concat(myArr2);
    // console.log(newArr);

    // const newArray = [...myArr, ...myArr2];
    // console.log(newArray);

    // const x = [1,2,3,[4,5],[6,7,[8,9]]];
    // const newArray = x.flat(Infinity);
    // console.log(newArray);

    // console.log(Array.isArray("shohan"));
    // console.log(Array.from("shohan"));

    // let score1 = 100;
    // let score2 = 200;
    // let score3 = 300;
    // console.log(Array.of(score1, score2, score3));


//looping over an array
    // for loop
    // for(let ind = 0; ind < myArr.length; ind++){
    //     console.log(myArr[ind]);
    // }

    //for of loop
    for(const element of myArr){
        console.log(element);
    }