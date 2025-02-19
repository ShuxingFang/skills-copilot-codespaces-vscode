// Create web server
// Create a web server that will respond to every request with a message that contains the request's URL.

// The server should listen on port 8080.

// The full URL is composed of two parts: the request's headers and the request's path.

// The request's headers are included in the request itself, and the request's path is the part of the URL that comes after the domain name.

// For example, in the URL http://www.example.com/path, the request's headers are http://www.example.com and the request's path is /path.

// The response should be a string in the following format:

// The request's headers
// The request's path
// For example, if the request's headers are http://www.example.com and the request's path is /path, the response should be:

// http://www.example.com
// /path
// The response should be sent with a status code of 200.

// If you get stuck, refer to the resources provided in the previous concept to help you complete this lab.

const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`${req.headers.host}\n${req.url}`);
});

server.listen(8080, () => {
    console.log('Server running on localhost:8080');
});