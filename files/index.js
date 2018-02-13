#!/usr/bin/env node
var Person = require('./person').person;
var FileRender = require('./fileRender');
var Progress = require('progress');
var progress = new Progress();


var person = new Person();
var fileRender = new FileRender();
var object = {
    "names" : []
};
var fileName = process.argv[2];
var numberItems = 0;

try{
    numberItems = parseInt(process.argv[3]);
    if(isNaN(numberItems)){
        throw new ExceptionUser("Number not valid");
    }
    else{
        render(numberItems, function(){fileRender.writeJSONFile(fileName, object)});
        
    }
}catch(e){
    console.log(e.message);
}

function render(number, callback){
    var i = 0;
    var j = 0;


    for(; i <= number; i++){
        setTimeout(function(){
            var row = {"lastname" : person.last(), "firstname" : person.first()};
            object.names.push(row);
            progress.setValue(j);
            
            j++;

            if(j === number){
                callback();
            }

        
        },i * 1000)
    }

}

function ExceptionUser(message){
    this.message= message;
    this.name = "ExceptionUser";
}





