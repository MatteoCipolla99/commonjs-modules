const fullName = require("./names.js");
const hobbies = require("./hobbies.js");

function people() {
    const person = fullName("Matteo", "Cipolla")
    return {
        fullName: `${person.firstName} ${person.lastName}`,
        hobbies: hobbies("calcio", "musica", "nuotare")
    }

}

console.log(people())