const fs = require('fs');
// console.log(fs);

fs.writeFile('demoFile1.txt', 'Hi this is my first work of Node.js',  error => {
    if (error) {console.log(error)}
    else console.log('Success');
})