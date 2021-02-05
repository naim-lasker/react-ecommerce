import { combineReducers } from "redux"
import { productDetailsReducer, productListReducer } from "./productReducer"

const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
})

export default rootReducer