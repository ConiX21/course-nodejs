var fs = require("fs");
var FileRender = (function(){
    var writerStream = null;
    function FileRender(){
	
    }
    
    FileRender.prototype.writeJSONFile = function(fileName, datas){
	writerStream = fs.createWriteStream(fileName + ".json");
	writerStream.write(JSON.stringify(datas));
	writerStream.end();
	
	writerStream.on("finish", finish);
	writerStream.on("error", error);

    }
        
    function finish()
    {
	console.log("JSON file was generated");
    }
    
    function error()
    {
	console.log("JSON file was generated");
    }
    
    return FileRender;
    
})();


exports.fileRender = FileRender;