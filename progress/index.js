var readline = require('readline');

module.exports = (function () {
    var cursor = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];

    function Progress() {
        
    }
    
    Progress.prototype.setValue = function (value) {
        readline.cursorTo(process.stdout, 0);
        let i = 0;

        cursor[value] = "\u2591";

        var uptime = setColor('red', process.uptime());
        var total = setColor('magenta', value.toFixed(2));
        var progress = setColor('green', cursor.join(''));

        process.stdout.write(`${uptime} sec | Total : ${total} % | Progress [${progress}]`);
    }

    function setColor(color, text) {
        let reset = "\x1b[0m";
        //let Bright = "\x1b[1m"; 
        //let Dim = "\x1b[2m"; 
        //let Underscore = "\x1b[4m"; 
        //let Blink = "\x1b[5m"; 
        //let Reverse = "\x1b[7m"; 
        //let Hidden = "\x1b[8m";

        let myColor = '';

        switch (color) {
            case 'black':
                myColor = "\x1b[30m";
                break;
            case 'red':
                myColor = "\x1b[31m";
                break;
            case 'green':
                myColor = "\x1b[32m";
                break;
            case 'yellow':
                myColor = "\x1b[33m";
                break;
            case 'blue':
                myColor = "\x1b[34m";
                break;
            case 'magenta':
                myColor = "\x1b[35m";
                break;
            case 'cyan':
                myColor = "\x1b[36m";
                break;
            case 'white':
                myColor = "\x1b[37m";
                break;
        }

        return `${myColor}${text}${reset}`;
    }

    return Progress;

})();

