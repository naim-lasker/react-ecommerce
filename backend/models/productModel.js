import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    // isNew: {
    //     type: Boolean,
    // },
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    img: {
        type: Array,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
    },
    brand: {
        type: String,
    },
    rating: {
        type: Number,
    },
    numReviews: {
        type: Number,
    },
    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})

const Product = mongoose.model("Product", productSchema)

export default Product