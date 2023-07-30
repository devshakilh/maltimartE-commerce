import React from 'react';
import './Footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom';

const Footer = () => {
    const year = new Date().getFullYear()
    return <footer className="footer">
        <Container>
            <Row>
                <Col lg='4' md='6' className='mb-4'>
                    <div className='logo'>

                        <div>
                            <h1 className='text-white'>Multimart</h1>

                        </div>

                    </div>
                    <p className="footer__text mt-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla cumque magni iure ad aliquid ullam quo asperiores officiis quas quia.
                    </p>
                </Col>
                <Col lg='3' md='3' className='mb-4'>
                    <div className="footer__quick-links">
                        <h4 className="quick__links-title"> Top Categories</h4>
                        <ListGroup>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to='#'>Mobile Phones</Link>
                            </ListGroupItem>
                        </ListGroup>
                        <ListGroup>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to='#'>Modern Sofa</Link>
                            </ListGroupItem>
                        </ListGroup>
                        <ListGroup>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to='#'>Arm Chair</Link>
                            </ListGroupItem >
                        </ListGroup>
                        <ListGroup>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to='#'>Smart Watches</Link>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col>
                <Col lg='2' md='3' className='mb-4'>
                    <div className="footer__quick-links">
                        <h4 className="quick__links-title"> Top Categories</h4>
                        <ListGroup>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to='/shop'>Shop </Link>
                            </ListGroupItem>
                        </ListGroup>
                        <ListGroup>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to='/cart'>Cart </Link>
                            </ListGroupItem>
                        </ListGroup>
                        <ListGroup>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to='/login'>Login </Link>
                            </ListGroupItem >
                        </ListGroup>
                        <ListGroup>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to='#'>Privacy Policy </Link>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col>
                <Col lg='3' md='4' >
                    <div className="footer__quick-links">
                        <h4 className="quick__links-title"> Contact</h4>
                        <ListGroup className='footer__contact'>
                            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                <span><i class='ri-map-pin-line'></i></span>
                                <p>122 Bottola, Barishal, Bangladesh</p>
                            </ListGroupItem>
                        </ListGroup>
                        <ListGroup className='footer__contact'>
                            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                <span><i class='ri-phone-line'></i></span>
                                <p>+88018704611411</p>
                            </ListGroupItem>
                        </ListGroup >
                        <ListGroup className='footer__contact'>
                            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                <span><i class='ri-mail-line'></i></span>
                                <p>mdshakil6565@gmail.com</p>
                            </ListGroupItem >
                        </ListGroup>

                    </div>

                </Col>
                <Col lg='12' className='text-center '>
                    <p className="footer__copyright">Copyright {year} developed by Md Shakil Hossain. All rights reserved.</p>

                </Col>
            </Row>
        </Container>
    </footer>

};

export default Footer;