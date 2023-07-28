import { Router } from 'express'
import { addMoviePage, createMovie, deleteMovie, getAllMovies, getMovieById, updateMovie } from '../controllers/movies'

const router = Router()
router.get("/", getAllMovies)
router.get("/add", addMoviePage)
// Dynamic routing
router.get("/:id", getMovieById)
router.post("/", createMovie)
router.put("/:id", updateMovie)
router.delete("/:id", deleteMovie)

export default router