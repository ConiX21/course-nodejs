
require('fs').watchFile('yourfile', function () {
    fs.stat('yourfile', function (err, stats) {
        console.log(stats.size);
    });
});


//Read all file in folder
const testFolder = './tests/';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
})

//follow read stream data
let fs = require('fs')
let file = 'demo.mp4'

fs.stat(file, (err, stat) => {
  let total = stat.size
  let progress = 0
  let read = fs.createReadStream(file)
  read.on('data', (chunk) => {
    progress += chunk.length
    console.log("J'ai lu " + Math.round(100 * progress / total) + "%")
  })
})