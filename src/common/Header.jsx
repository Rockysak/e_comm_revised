import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../images/logoimg2.jpg'
import '../App.css'
import { Link } from 'react-router-dom';
import Cart from '../components/Cart';
import { useSelector } from 'react-redux';


function Header() {

    const itemsCartCount = useSelector((state) => state.cart.items.length)
    return (
        <div className='container-fluid border-bottom border-info'>
            <Navbar expand="lg" className="">
                <Container fluid className=''>

                    <div className='logoimg'>
                        <img src={logo} className='w-100' />
                    </div>


                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-lg-0"

                        >
                            <Nav.Link href="#action1" as={Link} to='/' className='home'>Home</Nav.Link>
                            <NavDropdown title="Products" id="navbarScrollingDropdown" className='home'>
                                <NavDropdown.Item href="#action3" className='home'>Men's Clothing</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action4" className='home'>
                                    Women's Clothing
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5" className='home'>
                                    Laptop
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action6" className='home'>
                                    Electronics
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-5 inputbox"
                                aria-label="Search"
                            />
                        </Form>
                        <div className='ms-5'>
                            <Button className='btns'>Login</Button>
                            <Button as={Link} to='/wishlist' className='btns'>Whislist</Button>
                            <Button as={Link} to="/cart" className='btns'>
                                My Cart ({itemsCartCount})
                            </Button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
