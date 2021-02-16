import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../../redux/actions/cartAction'

export default props => {
    const dispatch = useDispatch()

    const [subTotal, setSubTotal] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    const productId = props.match.params.id
    const quantity = props.location.search ? Number(props.location.search.split('=')[1]) : 1


    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, quantity))
        }

    }, [dispatch, productId, quantity])

    useEffect(() => {
        console.log('cartItems', cartItems);
        setSubTotal(cartItems.reduce((a, c) => a + c.price * c.quantity, 0))
        setTotalQuantity(cartItems.reduce((a, c) => a + c.quantity, 0))

    }, [cartItems])

    const decreaseQuantity = item => {
        dispatch(addToCart(item.product, item.quantity - 1))
    }

    const increaseQuantity = item => {
        if (item.quantity > item.stock - 1) {
            return alert(`Stock is limited. You can only add ${item.stock} item to your cart`)
        }
        dispatch(addToCart(item.product, item.quantity + 1))
    }

    const removeFromCartHandler = id => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping')
    }

    return (
        <div>
            {
                cartItems.length === 0 ? 'No item found' :
                    <table width="80%">
                        <tbody>
                            {
                                cartItems.map((item, index) =>
                                    <tr key={index}>
                                        <td>{item.name}</td>

                                        <td>
                                            <div className="d-flex align-items-center mr-xl-4 mr-2 mb-sm-0 mb-3">
                                                <Button
                                                    variant="light"
                                                    className='quantity-count-button'
                                                    disabled={item.quantity <= 1 ? true : false}
                                                    size="sm"
                                                    onClick={() => decreaseQuantity(item)}>
                                                    <FaMinus />
                                                </Button>
                                                <input
                                                    className="form-control quantity-count-input"
                                                    type="number"
                                                    min="1"
                                                    max="1000000"
                                                    readOnly
                                                    value={item.quantity}
                                                />
                                                <Button
                                                    variant="light"
                                                    className='quantity-count-button'
                                                    size="sm"
                                                    onClick={() => increaseQuantity(item)}>
                                                    <FaPlus />
                                                </Button>
                                            </div>
                                        </td>
                                        <td>{item.price}</td>
                                        <td>
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                onClick={() => removeFromCartHandler(item.product)}>
                                                Remove
                                            </Button>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
            }


            <div>
                <table width="40%">
                    <thead>
                        <tr>
                            <th>Items</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{totalQuantity}</td>
                            <td>{subTotal}</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <div className="my-5">
                <Button
                    disabled={cartItems.length === 0 ? true : false}
                    size="sm"
                    onClick={checkoutHandler}>
                    Proceed to Checkout
                </Button>
            </div>
        </div>
    )
}
