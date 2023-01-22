import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styled from 'styled-components'

const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Bildspel bild 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Bildspel bild 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
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