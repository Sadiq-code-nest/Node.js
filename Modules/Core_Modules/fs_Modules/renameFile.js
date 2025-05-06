const fs = require('fs');

fs.rename('demoFile1.txt', 'demoFile2.txt', ()=> console.log('Success'))