import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styled from 'styled-components'
import { Image } from 'styles/MainStyles';

const fadeImages = [
  {
    url: 'https://images.unsplash.com/photo-1590692750735-48193f50f2a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NDQxNzA4OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
  },
  {
    url: 'https://images.unsplash.com/photo-1592567166164-1b8c156b35b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NDQxOTA3Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
  },
  {
    url: 'https://images.unsplash.com/photo-1446419055170-8d6c3f3f42c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NDQxOTEzMw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
  },
    {
    url: 'https://images.unsplash.com/photo-1613485930018-9718f90b524d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NDQxOTI1OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
  },
];

const Slideshow = () => {
  return (
    <SlideShowWrapper>
    <SlideContainer>
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <Image style={{ width: '100%' }} src={fadeImage.url} />
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </SlideContainer>
    </SlideShowWrapper>
  )
}

export default Slideshow;
const SlideShowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    @media (min-width: 668px) {
    width: 50%
    }
`

const SlideContainer = styled.div`
  width: 550px;
  height: auto;
  margin-top: 15px;
  @media (min-width: 668px) {
  width: 100%;
  margin: 15px;
    }
`




// import React from 'react';
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'
// import styled from 'styled-components'

// const slideImages = [
//   {
//     url: 'https://images.unsplash.com/photo-1590692750735-48193f50f2a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NDQxNzA4OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
//     caption: 'Bildspel bild 1'
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
//     caption: 'Bildspel bild 2'
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
//     caption: 'Bildspel bild 3'
//   },
// ];

// const Slideshow = () => {
//     return (
//       <SlideContainer>
//         <Slide>
//          {slideImages.map((slideImage, index)=> (
//             <SlideWrapper key={index}>
//               <div style={{'backgroundImage': `url(${slideImage.url})`}}>
//                 <span>{slideImage.caption}</span>
//               </div>
//             </SlideWrapper>
//           ))} 
//         </Slide>
//       </SlideContainer>
//     )
// }

// export default Slideshow;

// const SlideContainer = styled.div`
// border: 2px solid green;
//   width: 330px;
//   height: auto;
//   margin-top: 15px;
//   @media (min-width: 668px) {
//   width: 50%;
//   width: 400px;
//   height: 460px;
//   margin: 15px;
//     }
// `

// const SlideWrapper = styled.div`
// border: 2px solid black;
// height: 100%;
// width: 100%;
// @media (min-width: 668px) {
//  width: 90%;
//  padding-left: 10%;
//  height: 460px;
//  margin: 15px;
//  border: 2px solid red;
// }
// `
