const http = require('http');
const os = require('os');
const path = require('path');
const events = require('events');

const eventEmitter = new events.EventEmitter();

eventEmitter.on('start', () => {
    console.log("Event Triggered");
});

eventEmitter.emit('start');

const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type':'text/plain'});

    res.write("Custom Node Server\n\n");

    res.write("OS Platform: " + os.platform() + "\n");
    res.write("Total Memory: " + os.totalmem() + "\n");

    res.write("File Path: " + path.join(__dirname,'server.js'));

    res.end();
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});