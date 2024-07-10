const firstName = "Pravin";
const job = "Software Engineer";
const birthYear = 1999;

const message = `I am ${firstName} a ${
    new Date().getFullYear() - birthYear
} years old ${job}`;

console.log(message);
