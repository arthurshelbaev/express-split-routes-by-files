const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(require('./routes/products.route'))
app.use(require('./routes/brands.route'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})