const fs = require('fs');
fs.unlink('demoFile2.txt', ()=> console.log('Success'));