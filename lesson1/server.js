const http = require('http')

const server = http.createServer(function (req, res) {
    console.log(req);
    res.writeHead(200, {
        "Content-Type": "text/html"
    })
    res.write("Hello world")
    res.end()
})

server.listen(8080, function () {
    console.log("Server running on 8080");
})