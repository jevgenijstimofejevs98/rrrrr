import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Container>
            <Navbar><h2>About</h2></Navbar>
            </Container>
            </div>
        )
    }
}
