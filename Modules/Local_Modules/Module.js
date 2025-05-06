// Either require or import both can work
const m1= require('./Data');

console.log(m1);
console.log(m1.myName());


// require based on my need
// if i dont need cgpa so just import myName and myAge
const {myName, myAge}= require('./Data');
console.log(myName());

console.log(myAge());