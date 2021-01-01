import React from 'react'
import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from 'react-icons/ti'

const ProductRating = ({ rating }) => {
    return (
        <>
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
        </>
    )
}

export default ProductRating
