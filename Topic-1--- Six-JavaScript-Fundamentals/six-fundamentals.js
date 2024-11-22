/**------------------------------------------------------------------------
 *  TODO                      six fundamentals of js
 *
 *  1. How to declare a variable using let and const
 *  2. How to write conditions
 *  3. Array
 *  4. Loop
 *  5. Function
 *  6. Object
 *------------------------------------------------------------------------**/

// TODO 1 - Use of const and let
const fatherName = "Abu Taher";
let season = "rainy";
season = "winter";

console.log(fatherName, season);

// TODO 2 - Conditions
/**
 *  1. six basic conditions: >, <, ===, !==, <=, >=
 *  2. multiple conditions: &&, ||
 **/

if (fatherName === "Abu Taher" || season === "winter") {
    // NOTE the "OR ||" operator return true if the fist conditon is valid and do not check the other condition.
    console.log("both true");
} else if (fatherName === "abuTaher") {
    console.log("father name false");
} else {
    console.log("season name false");
}

// TODO 3 - Array
/**
 *  1. Array declaration
 *  2. Array length
 *  3. Array index
 **/

const numbers = [83, 23, 54, 65];
numbers[0] = 100;
console.log(numbers);

// TODO 4 - Loop
for (i = 0; i < numbers.length; i++) {
    number = numbers[i];
    console.log(number);
}

// TODO 5 - Function
function add(n1, n2) {
    const result = n1 + n2;
    return result;
}

const output = add(5, 10);
console.log("Sum = ", output);

// TODO 6 - Object
const student = {
    name: "Sumaya Akter",
    age: 23,
    subjects: ["Peripheral", "Operating system"],
};

// ANCHOR - 3 ways to access object property

const way1 = student.name; // Direct by property
const way2 = student["age"]; // Access via property name string

const myVariable = student.subjects;
const way3 = myVariable; // Access via property in a variable
console.log(way1, way2, way3);

// TODO - dot notation
const person = {
    name: "sumaya akter",
    age: 23,
    profession: "student",
    address: "Dhaka",
};
const myAge = person.age;
console.log(myAge);

// TODO - bracket notation
const myProfession = person["profession"];
console.log(myProfession);

const pName = "name";
const myName = person[pName];
console.log(myName);
