//Write your solutions in this file, don't forget to test your functions.
// 1
const countFromOne = (num) => {
    for (i = 1; i <= num; i++) {
        console.log(num);
    };
};

// 2
const countEveryOdd = (num) => {
    for (i = 1; i <= num; i++) {
        if (i % 2 === 1) {
            console.log(i)
        };
    };
};
countEveryOdd(10); // logs 1 3 5 7 9

// 3
const isNegative = i => i < 0 ? true : false;
// {
//     if (i < 0) {
//         return true;
//     } else {
//         return false;
//     };
// };
isNegative(3)         //returns false
isNegative(-2)        //returns true
isNegative(Math.PI)   //returns false

// 4
const betweenFiveAndTwenty = i => i >= 5 && i <= 20 ? true : false;
// {
//     if (i >= 5 && i <= 20) {
//         return true;
//     } else {
//         return false;
//     };
// };
betweenFiveAndTwenty(12) // returns true
betweenFiveAndTwenty(5) // returns true
betweenFiveAndTwenty(100) // returns false

// 5 
const sumOfThreeOrFive = () => {
    let sum = 0;
    for (let i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i; // reassignment of `sum`
        };
    };
    return sum;
};
sumOfThreeOrFive(); //returns 233168

// 6
const isAllLowerCase = (str) => {
    if (str.toLowerCase() === str) {
        return true;
    } else {
        return false;
    };
};
console.log(isAllLowerCase("hello")); //returns true
isAllLowerCase("seven eleven") //returns true
console.log(isAllLowerCase("Seven eleven has the best slushies")); //returns false

// 7
const countMultiplesOfFive = (arr) => {
    let count = 0;
    for (i = 0; i <= arr.length; i++) {
        if (arr[i] % 5 == 0) {
            count++;
        }
    }
    return count;
};
countMultiplesOfFive([1,2,3,4,5,6,7,8,9,10]); // returns 2
countMultiplesOfFive([15,23,35,45,67]) // returns 3
countMultiplesOfFive([2,6,14]) // returns 0