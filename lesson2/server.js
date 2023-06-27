import express from "express";
import fs from 'fs'
import bodyParser from 'body-parser'

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const data = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 100 },
    { id: 3, name: "Product 3", price: 100 },
]

app.get('/products', function (req, res) {
    res.send(data)
    res.end()
})

app.get('/products/add', function (req, res) {
    const html = fs.readFileSync('./pages/add.html', 'utf-8')
    res.send(html)
    res.end()
})

app.post('/products/add', function (req, res) {
    console.log("tao moi sp");
    console.log(req.body);
    res.end()
})

app.get('/products/:id', function (req, res) {
    const { id } = req.params
    const product = data.find((item) => item.id == id)
    res.send(product)
    res.end()
})



app.listen(8080, function () {
    console.log("Server running on port 8080");
})