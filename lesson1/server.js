const http = require('http')
const fs = require('fs') // File system

const data = [

]

const server = http.createServer(function (req, res) {
    console.log(req);
    res.writeHead(200, {
        "Content-Type": "text/html"
    })
    // Server side rendering
    if (req.url == "/") {
        const html = fs.readFileSync('./pages/home.html')
        res.write(html)
    }

    if (req.url == "/product") {
        res.write("<h1>Product page</h1>")
    }
    res.end()
})

server.listen(8080, function () {
    console.log("Server running on 8080");
})