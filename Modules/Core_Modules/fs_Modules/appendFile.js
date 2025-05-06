const fs = require('fs');
fs.appendFile('demoFile1.txt', ' Nice to meet you AppendFile', ()=> console.log('Success'))