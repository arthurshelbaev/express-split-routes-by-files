module.exports.brandsController = {
    getBrands: (req, res) => {
        res.json('Бренды')
    },
    postBrand: (req, res) => {
        res.json(`Добавлен бренд ${req.params.id}`)
    },
    deleteBrand: (req, res) => {
        res.json(`Удален бренд ${req.params.id}`)
    }
}