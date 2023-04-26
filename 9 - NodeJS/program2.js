var http = require("http");
var url = require("url");
var fs = require("fs");

fs.readFile("greetings.txt", "utf-8", (err, data) => {
    if (err) {
        console.log('Error reading File: '+ err);
        return;
    }
    var greetings = data.trim().split('\r\n');
    const server = http.createServer((req, res) => {
        const query = url.parse(req.url, true).query;
        const name = query.name;
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        //Send response
        res.writeHead(200, {'Content-type': 'text/plain'});
        if (name) {
            res.end(`${randomGreeting}, ${name}`);
        }
        else {
            res.end(`${randomGreeting}, Undefined User `);
        }
    });
    server.listen(8080, () => { console.log('Server is listening on Port 8080') });
});