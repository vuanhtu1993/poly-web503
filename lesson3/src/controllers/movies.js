import fs from 'fs'
import Joi from 'joi'
import Movies from '../models/movies'

// Controller
export const getAllMovies = async function (req, res) {
    try {
        const movies = await Movies.find()
        res.send(movies)
    } catch (err) {
        res.status(500).send({
            message: "Cố lỗi xảy ra"
        })
    }
    res.end()
}

export const getMovieById = async function (req, res) {
    const { id } = req.params
    try {
        const movie = await Movies.findById(id)
        res.send(movie)
    } catch (err) {
        res.status(500).send({
            message: "Cố lỗi xảy ra"
        })
    }
    res.end()
}

export const addMoviePage = function (req, res) {
    const html = fs.readFileSync('./pages/add.html', "utf-8")
    res.send(html)
    res.end()
}

const schema = Joi.object({
    title: Joi.string().min(10).required().messages({
        'string.empty': "{{#label}} dữ liệu bắt buộc",
        "string.min": "{{#label}} tối thiểu 10 ký tự"
    }),
    year: Joi.number().min(1990).required().messages({
        'number.empty': "{{#label}} dữ liệu bắt buộc",
        "number.min": "{{#label}} từ năm 1990"
    }),
    genres: Joi.array().items(Joi.string()).min(1),
    extract: Joi.string().min(10).required().messages({
        'string.empty': "{{#label}} dữ liệu bắt buộc",
        "string.min": "{{#label}} tối thiểu 10 ký tự"
    }),
})

export const createMovie = async function (req, res) {
    try {
        const { error } = schema.validate(req.body, { abortEarly: false })
        if (!error) {
            const movie = await Movies.create(req.body)
            res.send({
                massage: "Tạo mới movie thành công",
                data: movie
            })
        } else {
            const messages = error.details.map(item => item.message)
            res.status(400).send({
                message: messages
            })
        }
    } catch (err) {
        res.status(500).send({
            message: "Cố lỗi xảy ra"
        })
    }
    res.end()
}

export const updateMovie = async function (req, res) {
    // req => Body, params, query, files
    const { id } = req.params
    try {
        const { error } = schema.validate(req.body, { abortEarly: false })
        if (!error) {
            const movie = await Movies.findByIdAndUpdate(id, req.body)
            res.send({
                massage: "Cập nhật movie thành công",
                data: movie
            })
        } else {
            const messages = error.details.map(item => item.message)
            res.status(400).send({
                message: messages
            })
        }
    } catch (err) {
        res.status(500).send({
            message: "Cố lỗi xảy ra"
        })
    }
    res.end()
}

export const deleteMovie = async (req, res) => {
    const { id } = req.params
    try {
        const data = await Movies.findByIdAndDelete(id)
        if (data) {
            res.send({
                message: "Xoá movie thành công",
                data: data
            })
        } else {
            res.status(400).send({
                message: "Bản ghi không tồn tại"
            })
        }

    } catch (err) {
        res.status(500).send({
            message: "Cố lỗi xảy ra"
        })
    }
}