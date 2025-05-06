const fs = require('fs');

fs.exists('demoFile2.txt', (response) => {
    if (response) { console.log('Success') }
    else console.log('not Success')
}
);