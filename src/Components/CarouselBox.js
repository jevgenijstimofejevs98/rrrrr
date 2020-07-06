import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import cityFirst from '../assets/1.jpeg'
import citySecond from '../assets/2.jpeg'
import cityThird from '../assets/3.jpeg'




export default class Home extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img 
                    className="d-block w-100"
                    src={cityFirst}
                    alt="cityFirst"
                    />
                    <Carousel.Caption>
                        <h3>city</h3>
                        <p>Je pense donc je suis</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className="d-block w-100"
                    src={citySecond}
                    alt="citySecond"
                    />
                    <Carousel.Caption>
                        <h3>city</h3>
                        <p>Je pense donc je suis</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className="d-block w-100"
                    src={cityThird}
                    alt="cityThird"
                    />
                    <Carousel.Caption>
                        <h3>city</h3>
                        <p>Je pense donc je suis</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <h1>TEST</h1>
                    <Carousel.Caption>
                        <h3>city</h3>
                        <p>Je pense donc je suis</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
