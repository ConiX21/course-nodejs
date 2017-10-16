
//Timers and process

process.title = "Course informations";

process.on('exit', (code) => {
    console.log(setColor('magenta',`\nAbout to exit with code: ${code}`));
});

console.log("The process.argv0 property stores a read-only copy of the original value of argv[0] passed when Node.js starts" + "\n" + process.argv0 + "\n")
if (process.argv.length > 0) {
    process.argv.forEach((val, index) => {
        console.log(`${index}: ${val}`);
    });
    setTimeout(()=>{
        switch (process.argv[2]) {
            case 'machine':
                machineInformation()
                break;
            case 'progress':
                progressBar();
                break;
            default:
                process.stdout.write(setColor('red', new Error("Choice not valide")));
        }
    },1500)
    
}


function progressBar() {
    var i = 0;
    var cursor = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
    var intervalID = setInterval(function () {
        process.stdout.clearLine();  // clear current text
        process.stdout.cursorTo(0);  // move cursor to beginning of line

        //var cursor = new Array(10).join('\u2591');
        cursor[i] = "\u2591";

        if (++i === 10) {
            clearInterval(intervalID);
        }

        process.stdout.write(`${setColor('red', process.uptime())} sec | Total : ${setColor('magenta', i * 10)} % | Progress [${setColor('green', cursor.join(''))}]`);  // write text
        //i++;

    }, 1000);
}

function machineInformation() {


    console.log("\nplatform : " + process.platform)
    console.log("Title process : " + process.title)
    console.log("ExecPath : " + process.execPath)
    console.log(`This processor architecture is ${process.arch}`);

    setInterval(() => {
        //console.log(process.memoryUsage())
        process.stdout.clearLine();  // clear current text
        process.stdout.cursorTo(0);
        process.stdout.write(`Memory used : ${setColor('yellow', (process.memoryUsage().heapUsed / process.memoryUsage().heapTotal * 100).toFixed(2))} % (${setColor('green', process.uptime())} sec)`);

        if (process.uptime() > 20) {
            //processExitCode = 5000;
            process.exit(10);
        }


    }, 200)
}

function setColor(color, text) {
    let reset = "\x1b[0m";
    // Bright = "\x1b[1m"
    // Dim = "\x1b[2m"
    // Underscore = "\x1b[4m"
    // Blink = "\x1b[5m"
    // Reverse = "\x1b[7m"
    // Hidden = "\x1b[8m"

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