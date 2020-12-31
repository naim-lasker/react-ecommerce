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
                        data.products.map(item =>
                            <div key={item.id} className='col-lg-3 col-md-6'>
                                <SingleProduct item={item} />
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default AllProduct
