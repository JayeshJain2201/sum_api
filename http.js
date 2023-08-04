const http = require('http');

// creating the server object

http.createServer((req, res) => {
    //response of the server
    res.write('Hello from the server side');
    res.end();
}).listen(3000, () => console.log('Server is running.'));


