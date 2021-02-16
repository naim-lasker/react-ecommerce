import React from 'react'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
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
                <Link to={`/product/${product._id}`}>
                    <img src={product.img[0]} alt={product.name} className='img-fluid w-100' height="315" />
                </Link>

                {
                    product.isNew &&
                    <div className="public-product-label-group">
                        <label className="public-product-label public-label-new">new</label>
                    </div>
                }

                <div className="public-product-action-vertical">
                    <Link to="/" className="public-btn-product-icon" data-toggle="modal" data-target="#addCartModal" title="Add to cart">
                        <FaShoppingCart />
                    </Link>
                </div>

                <div className="public-product-action">
                    <Link to={`/product/${product._id}`} className="public-btn-product public-btn-quickview">
                        Quick View
                    </Link>
                </div>
            </figure>


            <div className="public-product-info">
                <Link to="/" className="public-btn-wishlist" title="Add to wishlist">
                    <FaHeart />
                </Link>

                <div className='d-flex mb-2'>
                    <div className="mr-2">
                        <Link to="/" className='badge badge-primary'>{product.category}</Link>
                    </div>
                    <div className="public-product-cat">
                        <span>{product.brand}</span>
                    </div>
                </div>

                <h3 className="public-product-name">
                    <Link to={`/product/${product._id}`}>{product.name}</Link>
                </h3>

                <div className="public-product-price">
                    <ins className="public-new-price">${formatAmount(currentPrice)}</ins>
                    {
                        product.discount > 0 &&
                        <del className="public-old-price">${formatAmount(product.price)}</del>
                    }
                </div>

                <ProductRating rating={product.rating} numReviews={product.numReviews} />
            </div>
        </div>
    )
}

export default SingleProduct
