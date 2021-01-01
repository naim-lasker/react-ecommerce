import React from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import { FaHeart } from 'react-icons/fa'
import Slider from "react-slick"
import ProductRating from '../../../components/Public/Product/Rating'
import { data } from '../../../data'
import { formatAmount } from '../../../helpers/common'


const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 5,
}

const ProductDetails = props => {
    console.log('props', props);
    const product = data.products.find(item => item.id == props.match.params.id)


    if (!product) {
        return <div>Product not found</div>
    }

    return (
        <section className='section-gap public-product-details'>
            <div className='container'>

                <Row>
                    <Col lg={6} className='d-flex'>
                        <Tab.Container defaultActiveKey="first">
                            <Row>
                                <Col lg={2} className='pr-sm-2'>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item className='mb-2'>
                                            <Nav.Link eventKey="first" className='p-0'>
                                                <img className='w-100 img-fluid' src={product.img} />
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='mb-2'>
                                            <Nav.Link eventKey="second" className='p-0'>
                                                <img className='w-100 img-fluid' src='/images/products/product-details-thumb-2.jpg' />
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='mb-2'>
                                            <Nav.Link eventKey="third" className='p-0'>
                                                <img className='w-100 img-fluid' src='/images/products/product-details-thumb-1.jpg' />
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='mb-2'>
                                            <Nav.Link eventKey="fourth" className='p-0'>
                                                <img className='w-100 img-fluid' src='/images/products/product-details-thumb-2.jpg' />
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='mb-2'>
                                            <Nav.Link eventKey="fifth" className='p-0'>
                                                <img className='w-100 img-fluid' src='/images/products/product-details-thumb-1.jpg' />
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>

                                <Col lg={10} className='pl-sm-0'>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <img className='w-100 img-fluid' src={product.img} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <img className='w-100 img-fluid' src='/images/products/product-details.jpg' />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <img className='w-100 img-fluid' src='/images/products/product-details.jpg' />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fourth">
                                            <img className='w-100 img-fluid' src='/images/products/product-details.jpg' />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fifth">
                                            <img className='w-100 img-fluid' src='/images/products/product-details.jpg' />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>


                    <Col lg={6}>
                        <div>
                            <h2 className='public-product-details-titile mt-3'>{product.name}</h2>
                            <div className="public-product-details-category">
                                CATEGORY: <span className="text-primary">{product.category}</span>
                            </div>
                            <div className="public-product-details-category">
                                BRAND: <span>{product.brand}</span>
                            </div>
                            <div className="public-product-details-price">${formatAmount(product.price)}</div>

                            <div>{product.description}</div>

                            <ProductRating rating={product.rating} />
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default ProductDetails
