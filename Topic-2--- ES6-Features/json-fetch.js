/**========================================================================
 * *                                Topics
 *  1. JSON
 *  2. fetch
 *  3. keys & values
 *========================================================================**/

// TODO-1 JSON
const student = {
    name: "sumaya akter",
    age: 23,
    subjects: ["peripheral", "operating", "economic"],
};
const studentJSON = JSON.stringify(student);

console.log(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// TODO-2 fetch
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json()) // রেসপন্সকে JSON এ কনভার্ট করা
    .then((data) => {
        // console.log(data);
    })
    .catch((error) => {
        // console.error("Error:", error);
    });

// TODO-3 object keys and values
const keys = Object.keys(student);
const values = Object.values(student);
console.log(keys);
console.log(values);

// TODO-4 extra: loops
const numbers = [23, 54, 65, 76, 99];
numbers.forEach((num) => console.log(num));
// numbers.map((num) => console.log(num*2));

const doubleTheNumbers = numbers.map((num) => num * 2);
console.log(doubleTheNumbers); // output in an array

// NOTE: In array like objects, for of is used
// NOTE: In normal object, for in is used
