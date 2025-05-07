const run_Server =require ('http');
// console.log(run_Server);

const port= 3000;
const hostname='127.0.0.1';

const Server= run_Server.createServer((request, response)=>
     response.end('<h1> Yahoooooo!!!!!!! server is running </h1>')
);
Server.listen(port, hostname, ()=>console.log(`Server is working at http://${hostname}:${port}`) );