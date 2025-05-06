// //__dirname & __filename show the root directory path
console.log(__dirname);
console.log(__filename);

const path1= require('path')
// // console.log(path1);

const extensionName =path1.extensionName; 
console.log(extensionName);
const joinName =path1.join(__dirname+ "/../view"); 
console.log(joinName);