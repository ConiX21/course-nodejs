
require('fs').watchFile('yourfile', function () {
    fs.stat('yourfile', function (err, stats) {
        console.log(stats.size);
    });
});