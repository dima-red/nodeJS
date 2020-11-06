const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const serve = () => {
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.end('Hello World');

        req.on('data', chunk => console.log('HERERERERERERREREERREREREE: ', chunk));
        req.on('end', () => console.log('EEEEEEENNNNNNNNDDDDDDDD!!!!!!'));
    });

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
};

module.exports = serve;
