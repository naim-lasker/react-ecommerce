import express from 'express'
import mongoose from 'mongoose'
import productRouter from './routes/productRouter.js'
import userRouter from './routes/userRouter.js'

const app = express()

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

app.use('/api/users', userRouter)
app.use('/api/products', productRouter)

app.use((err, req, res, next) => {
    res.status(500).send({
        message: err.message
    })
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})