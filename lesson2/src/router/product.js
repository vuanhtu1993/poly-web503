import { Router } from 'express'

const router = Router()

router.use((req, res, next) => {
    const date = new Date()
    console.log(req.url, req.method);
    console.log('Time: ', date)
    next()
})


const data = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 100 },
    { id: 3, name: "Product 3", price: 100 },
]

router.get('/', function (req, res) {
    res.send(data)
    res.end()
})

router.get('/add', function (req, res) {
    const html = fs.readFileSync('./pages/add.html', 'utf-8')
    res.send(html)
    res.end()
})

router.post('/add', function (req, res) {
    console.log("tao moi sp");
    console.log(req.body);
    res.end()
})

router.get('/:id', function (req, res) {
    const { id } = req.params
    const product = data.find((item) => item.id == id)
    res.send(product)
    res.end()
})

export default router