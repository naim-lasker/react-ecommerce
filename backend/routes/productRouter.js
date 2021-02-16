import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import { data } from '../data.js'
import Product from '../models/productModel.js'

const productRouter = express.Router()

productRouter.get('/', expressAsyncHandler(async (req, res) => {
    // await Product.remove({})
    const products = await Product.find({})
    res.send(products)
}))

productRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    // await Product.remove({})
    const createdProduct = await Product.insertMany(data.products)
    res.send({ createdProduct })
}))

productRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    // await Product.remove({})
    console.log('req.params.id', req.params.id);
    const product = await Product.findById(req.params.id)

    if (!product) {
        return res.status(404).send({ message: 'Product Not Found' })
    }

    res.send(product)

}))



export default productRouter