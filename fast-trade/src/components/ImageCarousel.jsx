import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Carousel.css'

function ImageCarousel() {
  return (
    <div className='carouselContainer'>
        <Carousel showThumbs={false} showStatus={false}>
            <div className="imageItem">
                <img src="https://media.video-cdn.espn.com/motion/2023/0916/Hu_230916_BR_futebol_brasileirao_vasco_x_fluminense_gols_finalgamehighlight/Hu_230916_BR_futebol_brasileirao_vasco_x_fluminense_gols_finalgamehighlight_5x2.jpg" alt="Vasco 1" />
            </div>
            <div className="imageItem">
                <img src="https://media.video-cdn.espn.com/motion/2023/0916/Hu_230916_BR_futebol_brasileirao_vasco_x_fluminense_gols_finalgamehighlight/Hu_230916_BR_futebol_brasileirao_vasco_x_fluminense_gols_finalgamehighlight_5x2.jpg" alt="Vasco 2" />
            </div>
            <div className="imageItem">
                <img src="https://media.video-cdn.espn.com/motion/2023/0916/Hu_230916_BR_futebol_brasileirao_vasco_x_fluminense_gols_finalgamehighlight/Hu_230916_BR_futebol_brasileirao_vasco_x_fluminense_gols_finalgamehighlight_5x2.jpg" alt="Vasco 3" />
            </div>
        </Carousel>
    </div>
  );
}

export default ImageCarousel;
