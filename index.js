const http = require("http");
const data = require("./data");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(data));
    res.end("Hello world!"); // after end we cant write any more data
  })
  .listen(5000);

// What we convered in this
// Make a server, create headers and body , create api with static data,
// put data in another file
