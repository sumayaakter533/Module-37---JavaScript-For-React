// localStorage.setItem("username", "JohnDoe");
// console.log(localStorage.getItem("username"));
// localStorage.removeItem("username");
// localStorage.clear();
// console.log(localStorage.length);
// console.log(localStorage.key(0));

const addToLocalStorage = () => {
    const idInput = document.getElementById("storage-id");
    const id = idInput.value;

    const valueInput = document.getElementById("storage-value");
    const value = valueInput.value;

    if (id && value) {
        localStorage.setItem(id, value);
    }
    idInput.value = "";
    valueInput.value = "";
};

// localStorage.setItem("numbers", [23, 54, 76]); // stored as string
localStorage.setItem("numbersArray", JSON.stringify([1, 2, 3])); // stored as array

const student = {
    name: "sumaya akter",
    age: 23,
};
// localStorage.setItem("student", student); // wrong way

// Correctly store the object in localStorage
localStorage.setItem("Student", JSON.stringify(student));

// const storedStudent = localStorage.getItem("student");
// console.log(storedStudent);

// const studentObj = JSON.parse(storedStudent);
// console.log(studentObj);

// Retrieve the object from localStorage
const storedStudent = localStorage.getItem("student");
console.log("Stored Student (String):", storedStudent);

// Convert the JSON string back to an object
if (storedStudent) {
    // Check if it exists to avoid errors
    const studentObj = JSON.parse(storedStudent);
    console.log("Student Object:", studentObj);
} else {
    console.log("No student data found in localStorage.");
}
