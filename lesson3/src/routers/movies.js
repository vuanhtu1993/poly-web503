import { Router } from 'express'
import { addMoviePage, createMovie, getAllMovies, getMovieById } from '../controllers/movies'

const router = Router()
router.get("/", getAllMovies)
router.get("/add", addMoviePage)
// Dynamic routing
router.get("/:id", getMovieById)
router.post("/", createMovie)

export default router