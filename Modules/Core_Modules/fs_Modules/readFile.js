const fs = require('fs');
fs.readFile('demoFile1.txt','utf-8', (err, data) => console.log(data));