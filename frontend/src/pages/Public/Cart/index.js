import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/actions/cartAction'

export default props => {
    const dispatch = useDispatch()

    const productId = props.match.params.id
    const quantity = props.location.search ? Number(props.location.search.split('=')[1]) : 1

    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, quantity))
        }
        
    }, [dispatch, productId, quantity])

    return (
        <div>
            Product Id = {productId}
            quantity = {quantity}
        </div>
    )
}
