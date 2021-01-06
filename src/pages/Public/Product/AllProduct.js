import React from 'react'
import SingleProduct from '../../../components/Public/Product/SingleProduct'
import MainTitle from '../../../components/UI/Title/MainTitle'
import { data } from '../../../data'

const AllProduct = () => {
    return (
        <section className='section-gap'>
            <div className='container'>
                <MainTitle title='All products' />

                <div className='row justify-content-center'>
                    {
                        data.products && data.products.length > 0 && data.products.map(product =>
                            <div key={product.id} className='col-xl-3 col-lg-4 col-md-6'>
                                <SingleProduct product={product} />
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default AllProduct
