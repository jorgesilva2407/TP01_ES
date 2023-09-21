import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Banner from '../images/Group 3BlackFriday (3).png'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Carousel.css'

function ImageCarousel() {
  return (
    <div className='carouselContainer'>
        <Carousel showThumbs={false} showStatus={false}>
            <div className="imageItem">
                <img src={Banner} alt="Vasco 1" />
            </div>
            <div className="imageItem">
                <img src={Banner} alt="Vasco 2" />
            </div>
            <div className="imageItem">
                <img src={Banner} alt="Vasco 3" />
            </div>
        </Carousel>
    </div>
  );
}

export default ImageCarousel;
