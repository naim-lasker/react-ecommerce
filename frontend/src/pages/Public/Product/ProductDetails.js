import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import { FaHeart, FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa'
import ProductRating from '../../../components/Public/Product/Rating'
import { formatAmount } from '../../../helpers/common'
import {
    EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton,
    LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton
} from 'react-share'
import { useDispatch, useSelector } from 'react-redux'
import { detailsProducts } from '../../../redux/actions/productAction'


export default props => {
    const dispatch = useDispatch()

    const productId = props.match.params.id
    const productDetails = useSelector(state => state.productDetails)

    const { loading, error, product } = productDetails

    const [quantity, setQuantity] = useState(1)
    const currentUrl = window.location.href

    useEffect(() => {
        dispatch(detailsProducts(productId))
    }, [dispatch, productId])

    const decreaseQuantity = () => {
        setQuantity(quantity => Number(quantity) - 1)
    }

    const increaseQuantity = () => {
        setQuantity(quantity => Number(quantity) + 1)
    }

    if (!product) {
        return <div>Product not found</div>
    }


    const addToCart = () => {
        if (quantity > product.stock) {
            return alert(`Stock is limited. You can only add ${product.stock} item to your cart`)
        }

        props.history.push(`/cart/${productId}?quantity=${quantity}`)
    }


    const renderProduct = () => {
        return (
            <Container>
                <Row>
                    <Col lg={6} className='d-flex'>
                        <Tab.Container defaultActiveKey="0">
                            <Row>
                                <Col md={2} sm={3} className='pr-sm-2'>
                                    <Nav variant="pills" className="flex-md-column">
                                        {
                                            product.img && product.img.length > 0 &&
                                            product.img.map((item, index) =>
                                                <Nav.Item className='mb-2' key={index}>
                                                    <Nav.Link eventKey={index} className='p-0'>
                                                        <img className='w-100 img-fluid' src={item} />
                                                    </Nav.Link>
                                                </Nav.Item>)
                                        }

                                    </Nav>
                                </Col>

                                <Col md={10} className='pl-sm-0'>
                                    <Tab.Content>{
                                        product.img && product.img.length > 0 &&
                                        product.img.map((item, index) =>
                                            <Tab.Pane eventKey={index} key={index}>
                                                <img className='w-100 img-fluid' src={item} />
                                            </Tab.Pane>)
                                    }
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>


                    <Col lg={6} className=' mt-lg-0 mt-4'>
                        <div>
                            <h2 className='public-product-details-titile mt-3'>{product.name}</h2>
                            <div className="public-product-details-category">
                                Category:
                                <span className="text-primary text-uppercase"> {product.category}</span>
                            </div>
                            <div className="public-product-details-category">
                                Brand:
                                <span className='text-uppercase'> {product.brand}</span>
                            </div>
                            <div className="public-product-details-price">
                                ${formatAmount(product.price)}
                            </div>

                            <div className="public-product-details-desc mb-3">
                                {product.description}
                            </div>

                            <ProductRating rating={product.rating} numReviews={product.numReviews} />

                            <div className="mt-3 text-warning font-weight-bold">
                                {product.stock <= 0 && 'Out of stock'}
                            </div>

                            {
                                product.stock > 0 &&
                                <div
                                    className='mt-4 py-3 d-flex flex-column flex-sm-row align-items-center public-quantity-container'>
                                    <h5 className='m-0 mr-xl-4 mr-2 mb-sm-0 mb-3'>Quantity</h5>
                                    <div className="d-flex align-items-center mr-xl-4 mr-2 mb-sm-0 mb-3">
                                        <Button
                                            variant="light"
                                            className='quantity-count-button'
                                            disabled={quantity <= 1 ? true : false}
                                            size="sm"
                                            onClick={decreaseQuantity}>
                                            <FaMinus />
                                        </Button>
                                        <input
                                            className="form-control quantity-count-input"
                                            type="number"
                                            min="1"
                                            max="1000000"
                                            readOnly
                                            value={quantity}
                                            onChange={event => setQuantity(event.target.value)}
                                        />
                                        <Button
                                            variant="light"
                                            className='quantity-count-button'
                                            size="sm"
                                            onClick={increaseQuantity}>
                                            <FaPlus />
                                        </Button>
                                    </div>
                                    <Button
                                        className='primary-button'
                                        onClick={addToCart}>
                                        <FaShoppingCart />
                                        <span className='ml-3'>Add to cart</span>
                                    </Button>
                                </div>
                            }

                            <div
                                className='mt-sm-5 mt-4 d-flex flex-column-reverse flex-sm-row align-items-center justify-content-sm-between justify-content-center'>
                                <div className='mt-sm-0 mt-4'>
                                    <FacebookShareButton
                                        title='Share in Facebook'
                                        url={currentUrl}
                                        quote={product.name}
                                        hashtag="#camperstribe"
                                        className='mr-2'
                                    >
                                        <FacebookIcon size={28} />
                                    </FacebookShareButton>

                                    <TwitterShareButton
                                        title='Share in Twitter'
                                        url={currentUrl}
                                        quote={product.name}
                                        hashtag="#camperstribe"
                                        className='mr-2'
                                    >
                                        <TwitterIcon size={28} />
                                    </TwitterShareButton>

                                    <LinkedinShareButton
                                        title='Share in LinkedIn'
                                        url={currentUrl}
                                        quote={product.name}
                                        hashtag="#camperstribe"
                                        className='mr-2'
                                    >
                                        <LinkedinIcon size={28} />
                                    </LinkedinShareButton>

                                    <EmailShareButton
                                        title='Share in Email'
                                        url={currentUrl}
                                        quote={product.name}
                                        hashtag="#camperstribe"
                                        className='mr-2'
                                    >
                                        <EmailIcon size={28} />
                                    </EmailShareButton>

                                </div>

                                <div>
                                    <Button variant='light'>
                                        <FaHeart />
                                        <span className='ml-3'>Add to Wishlist</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }

    return (
        <section className='section-gap public-product-details'>
            {
                loading ?
                    <h2>Loading...</h2> :
                    error ?
                        <h2>Error...</h2> :
                        renderProduct()
            }
        </section>
    )
}