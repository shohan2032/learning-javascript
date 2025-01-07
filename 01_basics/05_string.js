const myName = "shohan";
const city = "Chittagong";

//always use backtrace for printing variable's value. This is the best practise
    console.log(`My name is ${myName} and my city is ${city}`);

    const gameName = new String("Shohan");//here gameName will be a string of object

    console.log(gameName);
    console.log(gameName[3]);
    console.log(gameName.__proto__);
    console.log(gameName.length);
    console.log(gameName.toUpperCase());
    console.log(gameName.charAt(2));
    console.log(gameName.indexOf('Sh'));
    console.log(gameName.substring(0,4))
    console.log(gameName.slice(-3,-1));//using slice we can get the reverse substring also

    const x = "   sdkfjh    ";
    console.log(x.trim());

    const url = "http://shohan.dev/api%20todos%20";//browser gives %20 to a space where it gets space in an URL
    console.log(url.replace('%20','-'));
    console.log(url.replaceAll('%20','-'));
    console.log(url.includes('http'));//return true or false 

//convert a string into an array depending on specific value
    const  y = "ami-valo-achi-alhamdulillah";
    console.log(y.split('-'));//string.split(seperator,limit)

//Template Literals
    let output = `My name is ${myName}`;
    console.log(output);
    console.log(`My \n name \n is \n ${myName}`);