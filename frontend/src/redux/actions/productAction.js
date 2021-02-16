import httpRequest from '../../helpers/request'
import {
    PRUDUCT_LIST_FAIL,
    PRUDUCT_LIST_REQUEST,
    PRUDUCT_LIST_SUCCESS,
    PRUDUCT_DETAILS_FAIL,
    PRUDUCT_DETAILS_REQUEST,
    PRUDUCT_DETAILS_SUCCESS,
} from '../../constants/productConstant'


export const listProducts = () => async (dispatch) => {
    dispatch({
        type: PRUDUCT_LIST_REQUEST
    })

    try {
        const { data } = await httpRequest.get('/api/products', false, null)
        dispatch({
            type: PRUDUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRUDUCT_LIST_FAIL,
            payload: error.message
        })
    }
}



export const detailsProducts = productId => async (dispatch) => {
    dispatch({ type: PRUDUCT_DETAILS_REQUEST, payload: productId })

    try {
        const { data } = await httpRequest.get(`/api/product/${productId}`, false, null)
        dispatch({
            type: PRUDUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRUDUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}