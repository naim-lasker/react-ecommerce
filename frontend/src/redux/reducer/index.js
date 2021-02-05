import { data } from "../../data"

const redeucer = (state, action) => {
    return {
        products: data.products
    }
}

export default redeucer