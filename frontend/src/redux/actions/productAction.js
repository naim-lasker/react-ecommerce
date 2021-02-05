import { PRUDUCT_LIST_FAIL, PRUDUCT_LIST_REQUEST, PRUDUCT_LIST_SUCCESS } from "../../constants/productConstant"
import httpRequest from "../../helpers/request"


export const listProducts = () => async (dispatch) => {
    dispatch({ type: PRUDUCT_LIST_REQUEST })

    try {
        const { data } = await httpRequest.get('/api/products', false, null)
        dispatch({ type: PRUDUCT_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: PRUDUCT_LIST_FAIL, payload: error.message })
    }
}