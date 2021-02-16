import express from 'express'
import mongoose from 'mongoose'
import { data } from './data.js'
import userRouter from './routes/userRouter.js'

const app = express()

mongoose.connect('mongodb://localhost/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

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

app.use('/api/users', userRouter)

app.use((err, req, res, next) => {
    res.status(500).send({
        message: err.message
    })
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})