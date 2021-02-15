import { combineReducers } from 'redux'
import { productDetailsReducer, productListReducer } from './productReducer'
import { cartReducer } from './cartReducer'

const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
})

export default rootReducer