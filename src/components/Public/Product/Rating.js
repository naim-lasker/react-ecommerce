import React from 'react'
import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from 'react-icons/ti'

const ProductRating = ({ rating }) => {
    return (
        <>
            {
                rating >= 1 ?
                    <TiStarFullOutline /> :
                    rating >= 0.5 ?
                        <TiStarHalfOutline /> :
                        <TiStarOutline />
            }
            {
                rating >= 2 ?
                    <TiStarFullOutline /> :
                    rating >= 1.5 ?
                        <TiStarHalfOutline /> :
                        <TiStarOutline />
            }
            {
                rating >= 3 ?
                    <TiStarFullOutline /> :
                    rating >= 2.5 ?
                        <TiStarHalfOutline /> :
                        <TiStarOutline />
            }
            {
                rating >= 4 ?
                    <TiStarFullOutline /> :
                    rating >= 3.5 ?
                        <TiStarHalfOutline /> :
                        <TiStarOutline />
            }
            {
                rating >= 5 ?
                    <TiStarFullOutline /> :
                    rating >= 4.5 ?
                        <TiStarHalfOutline /> :
                        <TiStarOutline />
            }
        </>
    )
}

export default ProductRating
