import express from 'express'
import fs from 'fs'
import bodyParser from 'body-parser'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import mongoose from 'mongoose'

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

const app = express()
const port = 8080

// app.use(express.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Static
app.use(express.static('src/public'))

app.get('/', (req, res) => {
    res.end("Hello world")
})

mongoose.connect("mongodb://127.0.0.1:27017/web503")
    .then(() => console.log("Connect to DB successfully"))

app.listen(port, function () {
    console.log(`Server is running on ${port}`);
})