// Functions
      function addition(a,b)
      {
         console.log(`the summation of ${a} and ${b} is ${a+b}`);
         return a+b;
      }
      const res = addition(2,3);
      console.log(res);

      // arrow function (compact way of writing a function) , generally used for small functions
      const multiplication = (a,b) => {
         console.log(`the multiplication of ${a} and ${b} is ${a*b}`);
         return a*b;
      }
      multiplication(2,3);

      const singleLine = () => console.log("single line function");
      singleLine();

      const returnObject = () => ({name: "shohan", age: 3});
      console.log(returnObject()); // returns an object

      const returnVowelCount = (a) => {
         let count = 0;
         // for(let i = 0; i < a.length; i++)
         // {
         //    if(a[i] === 'a' || a[i] === 'e' || a[i] === 'i' || a[i] === 'o' || a[i] === 'u')
         //    {
         //       count++;
         //    }
         // }
         for(const char of a) {
            if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
               count++;
         }
         return count;
      }
      console.log(returnVowelCount("shohan"));

      // callBackFunction is a function thai is passed as an argument to another function.we use callBackFunction with forEach,setTimeout,setInterval,fetch etc.
      let arr = [1,2,3,4,5];
      arr.forEach(function printVal(val, ind, arr) {
         console.log(val,ind, arr)
      })

      arr.forEach( function squareVal(val) {
         // console.log(val*val)
         console.log(val**2)
      })

      let square  = (val) => {
         console.log(val**2);
      }
      arr.forEach(square);

   
// Array Methods 
      // map-> create a new array with the results of some operation. The value its callback retuns are used to form new array
      let nums = [1,2,3,4,5];
      let newArrayofNumsArray = nums.map((val) => {
         return val**2;
      })
      console.log(newArrayofNumsArray);

      // filter -> create a new array with the elements that pass the test implemented by the provided function. Eg: all even elements
      const evenNums = nums.filter((val) => {
         return val % 2 === 0;
      })
      console.log(evenNums);

      // reduce -> executes a reducer function on each element of the array, resulting in a single output value. Performs some operation and reduces the array to a single value.it returns that single value. Eg: sum of all elements
      
      // const sum = nums.reduce((res,currentVal) => {
      //    return res + currentVal;
      // })
      const sum = nums.reduce((res,currentVal) => {
         console.log(res,currentVal);
         return res + currentVal;
      },0) // 0 is the initial value of res(accumulator)
      console.log(sum);

      function calCulateCartPrice(...price) { // ... is called rest operator
         const total = price.reduce((sum,val) => {
            return sum + val;
         })
      }
      console.log(calCulateCartPrice(100,200,300,400,500));

      const maxNum = nums.reduce((max,currentVal) => {
         return Math.max(max,currentVal);
      })
      console.log(maxNum);

      const shoppingCart = [
         {name: "apple", price: 100},
         {name: "banana", price: 50},
         {name: "orange", price: 70}
      ];
      const totalPrice = shoppingCart.reduce((total,product) => {
         return total + product.price;
      },0)

      console.log(totalPrice);

      // find -> returns the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.
      const firstEvenNum = nums.find((val) => {
         return val % 2 === 0;
      })
      console.log(firstEvenNum);

      // let n = prompt("Enter a number: ");
      // const ar = [];
      // for(let i = 1;i <= n;i++)
      // {
      //    ar.push(i);
      // }
      // console.log(ar);

      //chainig of array methods
      const squareAndFilter = arr
                              .map((val) => val**2)
                              .filter((val) => val % 2 === 0)
                              .reduce((res,val) => res + val);
      console.log(squareAndFilter);


