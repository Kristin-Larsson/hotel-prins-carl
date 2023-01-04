import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styled from 'styled-components'

const slideImages = [
  {
    url: 'images/slide_2.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'images/slide_3.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'images/slide_4.jpg',
    caption: 'Slide 3'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <SlideWrapper key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </SlideWrapper>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;

const SlideWrapper = styled.div`
border: 2px solid black;
height: 250px;
@media (min-width: 668px) {
height: 400px;
border: 2px solid red;
}`