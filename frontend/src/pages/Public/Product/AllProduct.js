import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../../redux/actions/productAction'
import SingleProduct from '../../../components/Public/Product/SingleProduct'
import MainTitle from '../../../components/UI/Title/MainTitle'


const AllProduct = () => {
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])


    const renderProducts = () => {

        return (
            products && products.length > 0 ? products.map(product =>
                <div key={product._id} className='col-xl-3 col-lg-4 col-md-6'>
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
