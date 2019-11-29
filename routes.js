const http = require('http');
const fs = require('fs');

const requestHandler = (req, res) => {
    if (req.url === '/message' && req.method === 'GET') {
        const body = [];
        req.on('data', (chunk) => {
            console.log('data => ' + chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parseBosy = Buffer.concat(body).toString();
            console.log('end=> ' + parseBosy);
            fs.writeFileSync('message.txt', parseBosy);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });

    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>Bangladesh</h1>');
        res.write('<p>' + req.url + '</p>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
}
module.exports = requestHandler;
// exports = requestHandler;
// module.exports = { handler: requestHandler };