import React from 'react'
import { FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa'
import { findPercentage, formatAmount } from '../../../helpers/common'

const SingleProduct = ({ item }) => {
    let currentPrice = 0
    if (item.discount > 0) {
        currentPrice = item.price - findPercentage(item.discount, item.price)
    } else {
        currentPrice = item.price
    }

    return (
        <div className="public-single-product">

            <figure className="public-product-media">
                <a href={`/product/${item.id}`}>
                    <img src={item.img} alt={item.name} className='img-fluid w-100' height="315" />
                </a>

                {
                    item.isNew &&
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
                    <a href={`/product/${item.id}`} className="public-btn-product public-btn-quickview" title="Quick View">Quick View</a>
                </div>
            </figure>


            <div className="public-product-info">
                <a href="/" className="public-btn-wishlist" title="Add to wishlist">
                    <FaHeart />
                </a>

                <div className='d-flex mb-2'>
                    <div className="mr-2">
                        <a href="/" className='badge badge-primary'>{item.category}</a>
                    </div>
                    <div className="public-product-cat">
                        <span>{item.brand}</span>
                    </div>
                </div>

                <h3 className="public-product-name">
                    <a href={`/product/${item.id}`}>{item.name}</a>
                </h3>

                <div className="public-product-price">
                    <ins className="public-new-price">${formatAmount(currentPrice)}</ins>
                    {
                        item.discount > 0 &&
                        <del className="public-old-price">${formatAmount(item.price)}</del>
                    }
                </div>

                <div className="public-ratings-container">
                    {
                        item.numReviews > 0 &&
                        <div className="public-ratings-full mr-2">
                            {
                                Array.from(Array(item.rating), (e, i) => {
                                    return <FaStar key={i} />
                                })
                            }
                        </div>
                    }

                    <span className="public-rating-reviews">
                        {
                            item.numReviews > 0 ?
                                `( ${item.numReviews} ${item.numReviews > 1 ? 'reviews' : 'review'} )` :
                                '(No reviews)'
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
