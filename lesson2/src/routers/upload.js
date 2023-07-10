import { Router } from 'express'
import multer from 'multer'

const router = Router()

router.get("/demo", (req, res) => {
    console.log("upload image");
    res.end("upload image")
})

const upload = multer({
    limits: {
        fileSize: 1 * 1024 * 1024
    }
})

router.post("/image", upload.single('image'), (req, res) => {
    console.log(req.file);
    res.end()
})

export default router