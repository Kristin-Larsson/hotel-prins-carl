import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styled from 'styled-components'

const fadeImages = [
  {
    url: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3Mzk4MTI4Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
  },
  {
    url: 'https://images.unsplash.com/photo-1532250327408-9bd6e0ce2c49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NDQyMTM4MQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
  },
];

const SlideShowBreakfast = () => {
  return (
    <SlideShowWrapper>
    <SlideContainer>
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <SlideShowCenter style={{ width: '100%' }} src={fadeImage.url} />
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </SlideContainer>
    </SlideShowWrapper>
  )
}

export default SlideShowBreakfast;

const SlideShowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const SlideContainer = styled.div`
  width: 550px;
  height: auto;
  margin-top: 15px;
`

const SlideShowCenter = styled.img`
  width: 100%;
  height: auto;
  margin-top: 15px;
`
