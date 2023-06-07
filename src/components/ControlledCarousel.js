import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './ControlledCarousel.css';
import Image from 'react-bootstrap/Image'


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='carousel-container section'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="carousel-image">
        <Image
          src="/images/jousseaux.jpg"
          alt="First slide"
          rounded
        />
        </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image">
        <Image
          src="/images/piedmont_parc.jpg"
          alt="Second slide"
          rounded
        />
        </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image">
        <Image
          src="/images/ruisseau_jacque_cartier.jpg"
          alt="Third slide"
          rounded
        />
        </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>


  );
}

export default ControlledCarousel;