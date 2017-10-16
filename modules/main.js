//Modules are cached based on their resolved filename
//Core Modules
var person = require("./person");
person.setLastname('GASQUET');
person.setFirstname('Nicolas');

console.log(person.getLastname());
console.log(person.getFirstname());