import express from "express";
import fs from 'fs'
import bodyParser from 'body-parser'
import productRouter from './router/product'
import uploadRouter from './router/upload'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Static file
app.use(express.static('src/public'))

// Product router
app.use('/products', productRouter)
// Upload router
app.use('/upload', uploadRouter)



app.listen(8080, function () {
    console.log("Server running on port 8080");
})