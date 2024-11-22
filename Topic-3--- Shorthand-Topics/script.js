// TODO - check truthy value
let myVar = 5;
if (myVar) {
    console.log(myVar);
} else {
    console.log((myVar = 0));
}

// TODO - check falsy alue
let myMoney = 50;
if (!myMoney) {
    console.log(myMoney);
}

// TODO - ternary operator
const boyos = 20;
boyos >= 18 ? console.log("You can vote") : console.log("You can't vote");

// TODO - number to string conversion
const num = 10;
console.log(num);
const numString = num + "";
console.log(numString);

// TODO - string to number conversion
const input = "560";
const inputNum = +input;
console.log(inputNum);

// TODO - &&, ||, ! execution

const isActive = false;
const showUser = () => console.log("Display user");
const hideUser = () => console.log("Hide user");
// isActive ? showUser() : hideUser();

isActive && showUser();
isActive || hideUser();

if (!isActive) {
    console.log(isActive);
}
