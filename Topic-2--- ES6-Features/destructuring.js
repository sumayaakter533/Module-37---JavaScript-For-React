// TODO - array destructuring
const numbers = [5, 10];
const x = numbers[0];
const y = numbers[1];
// console.log(x, y);
// console.log(numbers);

const [a, b] = [5, 10];
console.log(a, b);

function getValues(num1, num2) {
    const values = [num1, num2];
    return values;
}
// console.log(getValues(7, 8));
const [value1, value2] = getValues(7, 8);
console.log(value1, value2);

// TODO - object destructuring
const student = {
    name: "sumaya akter",
    age: 23,
    subjects: ["peripheral", "economics", "operating system"],
};

// ANCHOR - simple destructuring
const { name, age } = student;
console.log(age);

// ANCHOR - different name use
const { name: userName } = student;
console.log(userName);

const [subject1, subject2] = student.subjects;
console.log(subject1, subject2);

const employee = {
    id: 101,
    name: "John Doe",
    age: 30,
    department: {
        name: "Software Development",
        location: "New York",
        team: {
            lead: "Jane Smith",
            members: [
                { name: "Alice Johnson", role: "Frontend Developer" },
                { name: "Bob Brown", role: "Backend Developer" },
                { name: "Charlie Davis", role: "QA Engineer" },
            ],
        },
    },
    skills: ["JavaScript", "React", "Node.js", "AWS"],
    contact: {
        email: "johndoe@example.com",
        phone: "+1-234-567-890",
    },
    isActive: true,
};

const { lead } = employee?.department?.team;
console.log(lead);
