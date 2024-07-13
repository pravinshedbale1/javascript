const pravin = {
    firstName: "Pravin",
    lastName: "Shedbale",
    job: "Software Engineer",
    currentCompany: "Oracle",
    getDetails: function () {
        return `${this.firstName} ${this.lastName} is working as ${this.job} at ${this.currentCompany}`;
    },
};

console.log(pravin["firstName"]);
console.log(pravin.lastName);
console.log(pravin.job);
console.log(pravin.currentCompany);
console.log(pravin.getDetails());

let i = 1;
do {
    console.log("Hello", i);
    i++;
} while (i < 0);
