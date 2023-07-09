import { Router } from 'express'
import multer from 'multer'
import sharp from 'sharp'
import { getRandomFileName } from '../ultilities'
import { __dirname } from '../server'
import path from 'path'

const router = Router()

router.use((req, res, next) => {
    next()
})

const upload = multer({
    // dest: 'public/',
    limits: {
        fileSize: 1 * 1024 * 1024,
    }
})

router.get('/', (req, res) => {
    console.log(__dirname);
    res.end(__dirname)
})

router.post('/image', upload.single('image'), async (req, res) => {
    const imageName = getRandomFileName() + ".png"
    const imagePath = path.join(__dirname, "/public/", imageName)
    await sharp(req.file.buffer).toFile(imagePath)
    res.send(imageName)
    res.end()
})

export default router