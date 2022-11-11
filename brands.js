const { Router } = require('express')

const router = Router()

module.exports = router

router.get('./brands', (req, res) => {
    res.json('Бренды')
})

router.post('./brands/:id', (req, res) => {
    res.json(`Добавлен бренд ${req.params.id}`)
})

router.delete('./brands/:id', (req, res) => {
    res.json(`Удален бренд ${req.params.id}`)
})