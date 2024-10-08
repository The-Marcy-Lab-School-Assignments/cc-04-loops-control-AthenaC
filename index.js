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
//countEveryOdd(10); // logs 1 3 5 7 9

// 3
const isNegative = (i) => {
    if (i < 0) {
        return true;
    } else {
        return false;
    };
};
isNegative(3)         //returns false
isNegative(-2)        //returns true
isNegative(Math.PI)   //returns false

// 4
const betweenFiveAndTwenty = (i) => {
    if (i >= 5 && i <= 20) {
        return true;
    } else {
        return false;
    };
};
betweenFiveAndTwenty(12) // returns true
betweenFiveAndTwenty(5) // returns true
betweenFiveAndTwenty(100) // returns false

// 5 not finished
const sumOfThreeOrFive = () => {
    let sum = 0;
    for (i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        };
    };
};
console.log(sumOfThreeOrFive()); //returns 233168

// 6
const isAllLowerCase = (str) => {
    if (str.toLowerCase("")) {
        return false;
    } else {
        return true;
    };
};
isAllLowerCase("hello") //returns true
isAllLowerCase("seven eleven") //returns true
isAllLowerCase("Seven eleven has the best slushies") //returns false