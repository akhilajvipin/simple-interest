import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Carouselpage() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
        <Carousel>
      <Carousel.Item>
      <img style={{width:'100%',}} src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ca2843e62171405e.jpg?q=20" alt="no img" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
     <img style={{width:'100%'}} src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9f2d8a698cd97710.jpg?q=20" alt="no img" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width:'100%'}} src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4eed11b0faee9cec.jpg?q=20" alt="no img" />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></div>
  )
}

export default Carouselpage