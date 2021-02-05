import { PRUDUCT_LIST_FAIL, PRUDUCT_LIST_REQUEST, PRUDUCT_LIST_SUCCESS } from "../../constants/productConstant";

export const productListReducer = (state = { loading: true, products: [] }, action) => {
    switch (action.type) {
        case PRUDUCT_LIST_REQUEST:
            return { loading: true }

        case PRUDUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload }

        case PRUDUCT_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}