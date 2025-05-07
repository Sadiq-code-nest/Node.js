const run_Server = require('http');
const fs = require('fs');
const port = 3000;
const hostname = '127.0.0.1';

const Server = run_Server.createServer((request, response) => {
    // response.end(' Yahoooooo!!!!!!! server is running ');


    // Home
    if (request.url === '/') {
        fs.readFile('home.html', (error, data) => {
            response.writeHead(200, { "content-type": 'text/html' });
            response.write(data);
            response.end('END');
        }
        );
    }
    // Contact
    else if (request.url === '/contact') {
        fs.readFile('contact.html', (error, data) => {
            response.writeHead(200, { "content-type": 'text/html' });
            response.write(data);
            response.end('END');
        }
        );
    }

    // About
    else if (request.url === '/about') {
        fs.readFile('about.html', (error, data) => {
            response.writeHead(200, { "content-type": 'text/html' });
            response.write(data);
            response.end('END');
        }
        );
    }

    //Error
    else {
        fs.readFile('error.html', (error, data) => {
            response.writeHead(404, { "content-type": 'text/html' });
            response.write(data);
            response.end('END')
        }
        );
    }





}
)
Server.listen(port, hostname, () => 
    console.log(`Server is working at http://${hostname}:${port}`));