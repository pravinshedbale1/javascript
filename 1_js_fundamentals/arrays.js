// Array literal syntax
const friends = ["Deepak", "Sushant", "Prabhakar", "Sandesh", "Pravin"];
console.log(friends);

const years = new Array(1997, 1998, 2000, 1999, 1999);
console.log(years);

console.log(typeof friends);
console.log(typeof years);

// Add elements

//At the end
friends.push("Rishab");
console.log(friends);

//At the begining
friends.unshift("Himanshu");
console.log(friends);

// Remove Elements

//From the end
friends.pop();
console.log(friends);

//From the begining
friends.shift();
console.log(friends);

console.log(friends.indexOf("Pravin"));

console.log(friends.includes("Deepak"));
