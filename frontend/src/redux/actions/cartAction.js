import httpRequest from '../../helpers/request'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../../constants/cartConstant'

export const addToCart = (productId, quantity) => async (dispatch, getState) => {
    const { data } = await httpRequest.get(`/api/product/${productId}`, false, null)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            img: data.img,
            price: data.price,
            stock: data.stock,
            product: data.id,
            quantity
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}


export const removeFromCart = productId => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: productId
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}