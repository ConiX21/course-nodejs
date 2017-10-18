var fs = require('fs');

var FileRender = (function () {
    var writeStream = null;

    function FileRender() {

    }

    FileRender.prototype.writeJSONFile = function (filename, datas) {
        writeStream = fs.createWriteStream(`${filename}.json`);
        writeStream.write(JSON.stringify(datas));
        writeStream.end();

        writeStream.on('finish', onFinish);
        writeStream.on('error', onError);
    }

    function onFinish(){
       console.log('onFinish');
    }

    function onError(){
        console.log(new Error("Error occured"));
    }

    return FileRender;
})();

module.exports = FileRender;