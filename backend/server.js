import express from 'express'
import { data } from './data.js'


const app = express()

app.get('/api/products', (req, res) => {
    res.send(data.products)
})

app.get('/api/product/:id', (req, res) => {
    const product = data.products.find(item => item.id == req.params.id)
    if (product) {
        res.send(product)
    } else {
        res.status(404).send({ message: 'Product not found' })
    }
})

app.get('/', (req, res) => {
    res.send('Server is ready')
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})