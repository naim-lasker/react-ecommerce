import React, { useState } from 'react'
import { Button, Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import { FaFacebookF, FaHeart, FaInstagram, FaMinus, FaPlus, FaShoppingCart, FaTwitter, FaYoutube } from 'react-icons/fa'
import ProductRating from '../../../components/Public/Product/Rating'
import { data } from '../../../data'
import { formatAmount } from '../../../helpers/common'


const ProductDetails = props => {
    const product = data.products.find(item => item.id == props.match.params.id)
    const [quantity, setQuantity] = useState(1)

    const decreaseQuantity = () => {
        setQuantity(quantity => Number(quantity) - 1)
    }

    const increaseQuantity = () => {
        setQuantity(quantity => Number(quantity) + 1)
    }

    if (!product) {
        return <div>Product not found</div>
    }

    return (
        <section className='section-gap public-product-details'>
            <Container>
                <Row>
                    <Col lg={6} className='d-flex'>
                        <Tab.Container defaultActiveKey="0">
                            <Row>
                                <Col lg={2} className='pr-sm-2'>
                                    <Nav variant="pills" className="flex-column">
                                        {
                                            product.img && product.img.length > 0 && product.img.map((item, index) =>
                                                <Nav.Item className='mb-2' key={index}>
                                                    <Nav.Link eventKey={index} className='p-0'>
                                                        <img className='w-100 img-fluid' src={item} />
                                                    </Nav.Link>
                                                </Nav.Item>)
                                        }

                                    </Nav>
                                </Col>

                                <Col lg={10} className='pl-sm-0'>
                                    <Tab.Content>{
                                        product.img && product.img.length > 0 && product.img.map((item, index) =>
                                            <Tab.Pane eventKey={index} key={index}>
                                                <img className='w-100 img-fluid' src={item} />
                                            </Tab.Pane>)
                                    }
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>


                    <Col lg={6}>
                        <div>
                            <h2 className='public-product-details-titile mt-3'>{product.name}</h2>
                            <div className="public-product-details-category">
                                Category: <span className="text-primary text-uppercase">{product.category}</span>
                            </div>
                            <div className="public-product-details-category">
                                Brand: <span className='text-uppercase'>{product.brand}</span>
                            </div>
                            <div className="public-product-details-price">${formatAmount(product.price)}</div>

                            <div className="public-product-details-desc mb-3">{product.description}</div>

                            <ProductRating rating={product.rating} numReviews={product.numReviews} />

                            <div className='mt-4 py-3 d-flex align-items-center public-quantity-container'>
                                <h5 className='m-0 mr-4'>Quantity</h5>
                                <div className="d-flex align-items-center mr-4">
                                    <Button variant="light" className='quantity-count-button' size="sm" onClick={decreaseQuantity}>
                                        <FaMinus />
                                    </Button>
                                    <input
                                        className="form-control quantity-count-input"
                                        type="number"
                                        min="1"
                                        max="1000000"
                                        value={quantity}
                                        onChange={event => setQuantity(event.target.value)}
                                    />
                                    <Button variant="light" className='quantity-count-button' size="sm" onClick={increaseQuantity}>
                                        <FaPlus />
                                    </Button>
                                </div>
                                <Button className='primary-button'>
                                    <FaShoppingCart />
                                    <span className='ml-3'>Add to cart</span>
                                </Button>
                            </div>

                            <div className='mt-5 d-flex align-items-center justify-content-between'>
                                <div className='social-share'>
                                    <button>
                                        <FaFacebookF className='single-social-share' />
                                    </button>
                                    <button>
                                        <FaTwitter className='single-social-share' />
                                    </button>
                                    <button>
                                        <FaInstagram className='single-social-share' />
                                    </button>
                                    <button>
                                        <FaYoutube className='single-social-share' />
                                    </button>
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
        </section>
    )
}

export default ProductDetails
