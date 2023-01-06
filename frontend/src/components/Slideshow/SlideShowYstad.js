import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styled from 'styled-components'

const slideImages = [
  {
    caption: 'Bildspel bild 1'
  },
  {
    caption: 'Bildspel bild 2'
  },
  {
    caption: 'Bildspel bild 3'
  },
];

const Slideshow = () => {
    return (
      <SlideContainer>
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <SlideWrapper key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </SlideWrapper>
          ))} 
        </Slide>
      </SlideContainer>
    )
}

export default Slideshow;

const SlideContainer = styled.div`
border: 2px solid green;
  width: 330px;
  height: auto;
  margin-top: 15px;
  @media (min-width: 668px) {
  width: 50%;
  width: 400px;
  height: 460px;
  margin: 15px;
    }
`

const SlideWrapper = styled.div`
border: 2px solid black;
height: 250px;
width: 100%;
@media (min-width: 668px) {
 width: 90%;
 padding-left: 10%;
 height: 460px;
 margin: 15px;
 border: 2px solid red;
}`