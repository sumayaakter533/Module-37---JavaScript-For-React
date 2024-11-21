const numbers = [23, 54, 88];
const newNumbers = [...numbers, 55];

numbers.push(100);
newNumbers.push(99);

console.log(numbers);
console.log(newNumbers);

const products = [
    { name: "laptop", price: 3200, brand: "lenovo", color: "blue" },
    { name: "phone", price: 1500, brand: "samsung", color: "black" },
    { name: "tablet", price: 2000, brand: "apple", color: "silver" },
    { name: "monitor", price: 800, brand: "dell", color: "white" },
    { name: "keyboard", price: 50, brand: "logitech", color: "black" },
    { name: "mouse", price: 20, brand: "hp", color: "red" },
    { name: "headphones", price: 100, brand: "sony", color: "blue" },
];

const newProduct = {
    name: "webcam",
    price: 800,
    brand: "Logitech",
    color: "black",
};

const newProducts = [...products, newProduct];
console.log(newProducts);
