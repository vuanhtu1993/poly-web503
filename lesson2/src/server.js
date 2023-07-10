import express from 'express'
import fs from 'fs'
import bodyParser from 'body-parser'
import movieRouter from './routers/movies'

const app = express()
const port = 8080

// app.use(express.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Routing
app.get('/', function (req, res) {
    const html = fs.readFileSync('./pages/home.html', 'utf-8')
    res.send(html)
    res.end()
})

// Middleware
app.use("/movies", movieRouter)

app.listen(port, function () {
    console.log(`Server is running on ${port}`);
})