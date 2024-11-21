/**==============================================
 *todo              Array Methods in JavaScript

 *?  This code demonstrates various array methods:
 **   map(), forEach(), filter(), and find().
 *=============================================**/

const products = [
    { name: "laptop", price: 3200, brand: "lenovo", color: "blue" },
    { name: "phone", price: 1500, brand: "samsung", color: "black" },
    { name: "tablet", price: 2000, brand: "apple", color: "silver" },
    { name: "monitor", price: 800, brand: "dell", color: "white" },
    { name: "keyboard", price: 50, brand: "logitech", color: "black" },
    { name: "mouse", price: 20, brand: "hp", color: "red" },
    { name: "headphones", price: 100, brand: "sony", color: "blue" },
];

// TODO: method-1 map()
// NOTE: map() একটি অ্যারের প্রতিটি আইটেমের উপর অপারেশন চালিয়ে নতুন অ্যারে তৈরি করে।
const brands = products.map((product) => product.brand);
const names = products.map((product) => product.name);
// console.log(names, brands);

products.map((product) => console.log(product.color)); //NOTE: this works

// const allProducts = products.map((product) => product);
// console.log(allProducts);

// TODO: method-2 forEach()
// NOTE: forEach() প্রতিটি অ্যারের আইটেমের উপর একটি ফাংশন চালায়, কিন্তু এটি কিছু রিটার্ন করে না।

// products.forEach((product) => console.log(product));
// products.forEach((product) => console.log(product.price));
const pp = products.forEach((product) => product.price);
console.log(pp); // output => undefined. as forEach doesn't return anything.

// TODO: method-3 filter()
// NOTE: filter() শর্ত অনুযায়ী নতুন অ্যারে তৈরি করে যেগুলো শর্ত পূরণ করে।
const cheapProducts = products.filter((product) => product.price <= 100);
console.log(cheapProducts);

const remainingProducts = products.filter((p) => p.name !== "phone");
console.log("Products without phone: ", remainingProducts);

// NOTE - when condition is applied in map method it returns true false
// const cheapProducts = products.map((product) => product.price <= 100);
// OUTPUt -
/* [
    false, false,
    false, false,
    true,  true,
    true
]*/

const specificName = products.filter((p) => p.name.includes("n"));
console.log(specificName);

// TODO: method-4 find()
// NOTE: find() প্রথম আইটেমটি রিটার্ন করে যেটি শর্ত পূরণ করে।
const specialName = products.find((p) => p.name.includes("n"));
console.log(specialName);
