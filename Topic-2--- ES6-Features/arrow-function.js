const getFifty = () => 50;
console.log(getFifty()); // Output: 50

const addSixty = (num) => num + 60;
console.log(addSixty()); // Output: NaN
console.log(addSixty(40)); // Output: 100

const isEven = (x) => x % 2 == 0;
console.log(isEven(100)); // Output: true
console.log(isEven(99)); // Output: false

const addTwoNumbers = (x, y = 5) => x + y;
console.log(addTwoNumbers(20, 10)); // Output: 30
console.log(addTwoNumbers(20)); // Output: 25

const doMath = (num1, num2) => {
    const result = num1 * num2;
    return result;
};
console.log(doMath(10, 10)); // Output: 100
