import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SingleProduct from '../../../components/Public/Product/SingleProduct'
import MainTitle from '../../../components/UI/Title/MainTitle'


const AllProduct = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get('/api/products')
            setProducts(data)
            setLoading(false)

        } catch (err) {
            setLoading(false)
            setError(err.message)
        }
    }

    const renderProducts = () => {

        return (
            products.length > 0 ? products.map(product =>
                <div key={product.id} className='col-xl-3 col-lg-4 col-md-6'>
                    <SingleProduct product={product} />
                </div>
            ) : 'No product found'
        )
    }

    return (
        <section className='section-gap'>
            <div className='container'>
                <MainTitle title='All products' />

                <div className='row justify-content-center'>
                    {
                        loading ?
                            <h2>Loading...</h2> :
                            error ?
                                <h2>Error...</h2> :
                                renderProducts()
                    }

                </div>
            </div>
        </section>
    )
}

export default AllProduct
