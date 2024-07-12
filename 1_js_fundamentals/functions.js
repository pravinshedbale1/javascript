// Function Declaration
function printDetails(name, profession) {
    console.log(`My name is ${name}, I am a ${profession}`);
}

printDetails("Pravin", "Applications Engineer");

// Function Expression
// Function is just like a value it can be stored in variables
const printPerson = function () {
    console.log(
        "Hi I am printPerson function, I am basically a function expression"
    );
};

printPerson();

// Arrow function

const printMe = () => {
    console.log("Hello there you just used arrow function");
};

printMe();
