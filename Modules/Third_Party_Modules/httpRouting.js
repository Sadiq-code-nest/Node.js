const run_Server = require('http');
const fs = require('fs');
const port = 3000;
const hostname = '127.0.0.1';

const Server = run_Server.createServer((request, response) => {
    // response.end(' Yahoooooo!!!!!!! server is running ');

    const readFile_Handle = (statusCode, path) => {
        fs.readFile(path, (error, data) => 
            {
            response.writeHead(statusCode, { "content-type": 'text/html' });
            response.write(data);
            response.end('END');
            }
        );
    }

    // Home
    if (request.url === '/') {
        readFile_Handle(200, './views/home.html')
    }
    // Contact
    else if (request.url === '/contact') {
        readFile_Handle(200, './views/contact.html')
    }

    // About
    else if (request.url === '/about') {
        readFile_Handle(200, './views/about.html')
    }

    //Error
    else {
        readFile_Handle(404, './views/error.html')
    }
});


Server.listen(port, hostname, () =>
    console.log(`Server is working at http://${hostname}:${port}`));