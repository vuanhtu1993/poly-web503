import express from "express";
import fs from 'fs'
import bodyParser from 'body-parser'
import productRouter from './router/product'

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Static file
app.use(express.static('public'))

// Product router
app.use('/products', productRouter)



app.listen(8080, function () {
    console.log("Server running on port 8080");
})