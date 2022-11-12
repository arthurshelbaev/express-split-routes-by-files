const { Router } = require('express')
const { productsController } = require('../controllers/products.controller')

const router = Router()

router.get('/products', productsController.getProducts)

router.get('/products/:id', productsController.getProduct)

router.post('/products/:id', productsController.postProduct)

router.delete('/products/:id', productsController.deleteProduct)

module.exports = router