import React, { Component } from 'react';
import { Button, Nav, Navbar, Form, Container, FormControl } from 'react-bootstrap'
import logo from "./logo192.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';
import CarouselBox from '../Components/CarouselBox'

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar  collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height='30'
                                width='30'
                                className="d-inline-block align-top"
                            ></img>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="response-navbar-nav" />
                        <Navbar.Collapse>
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/contacts">Contacts</Nav.Link>
                                <Nav.Link href="/blog">Blog</Nav.Link>
                            </Nav>
                            <Form inline >
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
<CarouselBox />

                <Router>
                    <Switch>
                        
                        <Route exact path="/" Component={Home} />
                        <Route exact path="/about" Component={About} />
                        <Route exact path="/contacts" Component={Contacts} />
                        <Route exact path="/blog" Component={Blog} />
                    </Switch>
                </Router>
            </>
        )
    }
}