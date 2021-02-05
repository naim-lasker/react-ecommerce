import {
    PRUDUCT_LIST_FAIL,
    PRUDUCT_LIST_REQUEST,
    PRUDUCT_LIST_SUCCESS,
    PRUDUCT_DETAILS_FAIL,
    PRUDUCT_DETAILS_REQUEST,
    PRUDUCT_DETAILS_SUCCESS,
} from "../../constants/productConstant";

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

export const productDetailsReducer = (state = { loading: true, product: {} }, action) => {
    switch (action.type) {
        case PRUDUCT_DETAILS_REQUEST:
            return { loading: true }

        case PRUDUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }

        case PRUDUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}