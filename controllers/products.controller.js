module.exports.productsController = {
    getProducts: (req, res) => {
        res.json('Продукция')
    },
    getProduct: (req, res) => {
        res.json(`Продукт ${req.params.id}`)
    },
    postProduct: (req, res) => {
        res.json(`Добавлен продукт ${req.params.id}`)
    },
    deleteProduct: (req, res) => {
        res.json(`Удален продукт ${req.params.id}`)
    }
}