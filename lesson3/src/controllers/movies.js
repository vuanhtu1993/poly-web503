import fs from 'fs'
import Joi from 'joi'
import Movies from '../models/movies'

// Controller
export const getAllMovies = async function (req, res) {
    // if (movies) {
    //     res.status(200).send(movies)
    // } else {
    //     res.status(500).send({
    //         message: "Server internal errors"
    //     })
    // }
    const movies = await Movies.find()
    res.send(movies)
    res.end()
}

export const getMovieById = async function (req, res) {
    const { id } = req.params
    // const movie = movies.find(m => m.id == id)
    const movie = await Movies.findById(id)
    // const movie = await Movies.findOne({_id: id})
    res.send(movie)
    res.end()
}

export const addMoviePage = function (req, res) {
    const html = fs.readFileSync('./pages/add.html', "utf-8")
    res.send(html)
    res.end()
}

const schema = Joi.object({
    id: Joi.number().required(),
    title: Joi.string().min(10).required().messages({
        'string.empty': "{{#label}} dữ liệu bắt buộc",
        "string.min": "{{#label}} tối thiểu 10 ký tự"
    }),
    genres: Joi.array().items(Joi.string()).min(1)
})

export const createMovie = function (req, res) {
    const data = { ...req.body, id: Date.now() }
    const { error } = schema.validate(data)
    if (!error) {
        movies.push({ ...req.body, id: Date.now() })
        res.send(movies)
    } else {
        res.status(400).send({
            message: error.details[0].message
        })
    }
    res.end()
}