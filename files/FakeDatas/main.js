#!/usr/bin/env node
var Persons = require("./Persons").persons;
var FileRender = require("./FileRender").fileRender;
var p = new Persons();
var fileRender = new FileRender();
var objects = {"names": []}
var fileName = process.argv[2];

try {
    var number = parseInt(process.argv[3]);
    if (isNaN(number))
	throw new ExceptionUser("number not valide");
    else
    
    render(number);
    fileRender.writeJSONFile(fileName, objects);

} catch (e) {
    console.log(e.message);
}

function render(nb)
{
    for (var i = 0; i < nb; i++) {
	var row = {"lastName": p.last(), "firstName": p.first()};
	objects.names.push(row);
	console.log(row);
    }

}

function ExceptionUser(message) {
    this.message = message;
    this.name = "ExceptionUser";
}







//var readline = require('readline');
//var rl = readline.createInterface({
//  input: process.stdin,
//  output: process.stdout
//});
//
//rl.question('What is your favorite food?', (answer) => {
//    console.log('Oh, so your favorite food is ', answer);
//});
  