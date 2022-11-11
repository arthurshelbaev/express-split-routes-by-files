const { Router } = require('express')

const router = Router()

router.get('./products', (req, res) => {
    res.json('Продукция')
})

router.get('./products/:id', (req, res) => {
    res.send(`Продукт ${req.params.id}`)
})

router.post('./products', (req, res) => {
    res.send('Добавлен продукт')
})

router.delete('./products/:id', (req, res) => {
    res.json(`Удален продукт ${req.params.id}`)
})

module.exports = router