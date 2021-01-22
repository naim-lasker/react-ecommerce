import React from 'react'
import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from 'react-icons/ti'

const ProductRating = ({ rating, numReviews }) => {
    return (
        <div className="public-ratings-container">
            {
                numReviews > 0 &&
                <div className="public-ratings-full mr-2">
                    {
                        rating >= 1 ?
                            <TiStarFullOutline color='#d26e4b' /> :
                            rating >= 0.5 ?
                                <TiStarHalfOutline color='#d26e4b' /> :
                                <TiStarOutline color='#d26e4b' />
                    }
                    {
                        rating >= 2 ?
                            <TiStarFullOutline color='#d26e4b' /> :
                            rating >= 1.5 ?
                                <TiStarHalfOutline color='#d26e4b' /> :
                                <TiStarOutline color='#d26e4b' />
                    }
                    {
                        rating >= 3 ?
                            <TiStarFullOutline color='#d26e4b' /> :
                            rating >= 2.5 ?
                                <TiStarHalfOutline color='#d26e4b' /> :
                                <TiStarOutline color='#d26e4b' />
                    }
                    {
                        rating >= 4 ?
                            <TiStarFullOutline color='#d26e4b' /> :
                            rating >= 3.5 ?
                                <TiStarHalfOutline color='#d26e4b' /> :
                                <TiStarOutline color='#d26e4b' />
                    }
                    {
                        rating >= 5 ?
                            <TiStarFullOutline color='#d26e4b' /> :
                            rating >= 4.5 ?
                                <TiStarHalfOutline color='#d26e4b' /> :
                                <TiStarOutline color='#d26e4b' />
                    }
                </div>
            }

            <span className="public-rating-reviews">
                {
                    numReviews > 0 ?
                        `( ${numReviews} ${numReviews > 1 ? 'reviews' : 'review'} )` :
                        '(No reviews)'
                }
            </span>
        </div>
    )
}

export default ProductRating
