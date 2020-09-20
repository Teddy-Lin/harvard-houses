import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './houseimage.module.css'
import { Carousel } from 'react-responsive-carousel';

export default class HouseImage extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="architect.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="architect.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="architect.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
