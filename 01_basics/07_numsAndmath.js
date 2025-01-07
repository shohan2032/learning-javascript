// Numbers
    const score = 200;
    console.log(score);

    // strongly defined for number
    const balance = new Number(400);
    console.log(balance);
    console.log(typeof balance);
    console.log(balance.toFixed(2));

    const s = balance.toString();
    console.log(typeof s);

    const n = 238.398;
    console.log(n.toPrecision(2));

    const hundreds = 1000000;
    console.log(hundreds.toLocaleString());

// Math -> Object
    console.log(Math.abs(-4));
    console.log(Math.round(4.6));
    console.log(Math.ceil(4.3));
    console.log(Math.floor(4.6));
    console.log(Math.min(2,3,4,5));
    console.log(Math.max(2,3,4,5));
    console.log(Math.random());//return a real number between 0 and 1
    console.log(Math.floor((Math.random()*10)) + 1);// range -> 1 to 9

    //best practise for generating random value in terms of range
    const min = 10;
    const max = 20;
    console.log(Math.floor(Math.random()*(max-min+1)) + min);