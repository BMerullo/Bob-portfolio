import React from 'react';
import Carousel from 'nuka-carousel';
import reactImg from '../images/React-icon.svg.png';
import expressImg from '../images/express-img.png'

export default class extends React.Component {
    render() {
        return (
            <Carousel autoplay="true" autoplayReverse="true">
                <img className="carousel-img" src={reactImg} />
                <img className="carousel-img" src={expressImg} />
                {/* <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide3" />
                <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide4" />
                <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide5" />
                <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide6" /> */}
            </Carousel>
        );
    }
}