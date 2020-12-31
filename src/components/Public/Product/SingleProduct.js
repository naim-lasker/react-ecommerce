import React from 'react'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { findPercentage, formatAmount } from '../../../helpers/common'
import ProductRating from './Rating'

const SingleProduct = ({ product }) => {
    let currentPrice = 0
    if (product.discount > 0) {
        currentPrice = product.price - findPercentage(product.discount, product.price)
    } else {
        currentPrice = product.price
    }

    return (
        <div className="public-single-product">

            <figure className="public-product-media">
                <a href={`/product/${product.id}`}>
                    <img src={product.img} alt={product.name} className='img-fluid w-100' height="315" />
                </a>

                {
                    product.isNew &&
                    <div className="public-product-label-group">
                        <label className="public-product-label public-label-new">new</label>
                    </div>
                }

                <div className="public-product-action-vertical">
                    <a href="/" className="public-btn-product-icon" data-toggle="modal" data-target="#addCartModal" title="Add to cart">
                        <FaShoppingCart />
                    </a>
                </div>

                <div className="public-product-action">
                    <a href={`/product/${product.id}`} className="public-btn-product public-btn-quickview" title="Quick View">Quick View</a>
                </div>
            </figure>


            <div className="public-product-info">
                <a href="/" className="public-btn-wishlist" title="Add to wishlist">
                    <FaHeart />
                </a>

                <div className='d-flex mb-2'>
                    <div className="mr-2">
                        <a href="/" className='badge badge-primary'>{product.category}</a>
                    </div>
                    <div className="public-product-cat">
                        <span>{product.brand}</span>
                    </div>
                </div>

                <h3 className="public-product-name">
                    <a href={`/product/${product.id}`}>{product.name}</a>
                </h3>

                <div className="public-product-price">
                    <ins className="public-new-price">${formatAmount(currentPrice)}</ins>
                    {
                        product.discount > 0 &&
                        <del className="public-old-price">${formatAmount(product.price)}</del>
                    }
                </div>

                <div className="public-ratings-container">
                    {
                        product.numReviews > 0 &&
                        <div className="public-ratings-full mr-2">
                            <ProductRating rating={product.rating} />
                        </div>
                    }

                    <span className="public-rating-reviews">
                        {
                            product.numReviews > 0 ?
                                `( ${product.numReviews} ${product.numReviews > 1 ? 'reviews' : 'review'} )` :
                                '(No reviews)'
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
