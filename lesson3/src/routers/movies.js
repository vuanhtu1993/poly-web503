import { Router } from 'express'
import { addMoviePage, createMovie, deleteMovie, getAllMovies, getMovieById, updateMovie } from '../controllers/movies'
import { checkPermission } from '../middleware/permission'

const router = Router()
router.get("/", getAllMovies)
router.get("/add", addMoviePage)
// Dynamic routing
router.get("/:id", getMovieById)
router.post("/", checkPermission, createMovie)
router.put("/:id", checkPermission, updateMovie)
router.delete("/:id", checkPermission, deleteMovie)

export default router