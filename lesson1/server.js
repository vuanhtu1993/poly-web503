const http = require('http')
const fs = require('fs')

const server = http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html",
    })
    if (req.url == "/") {
        const html = fs.readFileSync('./pages/home.html')
        console.log(html.toString());
        res.write(html)
    }
    if (req.url == "/product") {
        res.write("<h1>Product</h1>")
    }
    res.end()
})

server.listen(8080, function () {
    console.log("Server running on 8080");
})