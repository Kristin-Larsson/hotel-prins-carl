import styled from 'styled-components';

export const OuterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const InnerWrapper = styled.div`
    background-color: white;
    width: 90%;
    @media (min-width: 668px) {
    background-color: white;
    width: 80%;
    padding-bottom:150px;
    }
`;

export const InnerWrapperFooter = styled(InnerWrapper)`
    background-color: transparent;
    position: relative;
    width: 90%;
    margin-top: 2px;
    height: 27vh;
    bottom: 0px;
    @media (min-width: 668px) {
    width: 80%;
    }
`;

export const H1 = styled.h1`
    font-family: 'Playfair Display', serif;
    text-align: center;
    font-size: 25px;
    color: black;
    @media (min-width: 668px) {
    font-size: 30px;   
    }
`;

export const H2 = styled.h2`
    font-family: 'Playfair Display', serif;
    text-align: center;
    font-size: 20px;
    color: black;
    @media (min-width: 668px) {
    font-size: 30px;   
    }
`;


export const P = styled.p`
    font-family: 'Playfair Display', serif;
    text-align: left;
    font-size: 18px;
    margin: 0% 10% 0% 10%; 
    color: black;
    a{
    font-family: 'PT Sans', sans-serif;
    text-transform: uppercase;
    color: #80000E;
    text-decoration: none;
    }
    @media (min-width: 668px) {
    font-size: 20px;   
    }
`;

export const Section = styled.section`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10px;
height: 100vh;
width: 100%;
@media (min-width: 668px) {
height: auto;
margin-top:150px;
justify-content:center;
}
`
export const LastSection = styled(Section)`
position: aboslute;
margin-top: 0;
height: 73vh;
background: white;
`
export const SectionContainer = styled.div`
background-color: white;
@media (min-width:668px) and (max-width: 1150px){
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    height: 400px;
    align-items: center;
    background-color: rgb(250, 241, 228);
    width: 70%;
    min-width: 650px;  
}
@media (min-width: 1150px) {
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    height: 600px;
    align-items: center;
    background-color: rgb(250, 241, 228);
    width: 80%;
    min-width: 1100px;
}
`


export const Image = styled.img`
  width: 100%;
  height: auto;
  margin-top: 15px;
    @media (min-width:668px) and (max-width: 1150px){
    width: 50%;
    max-width: auto;
    height: 300px;
    margin: 15px;
  }
  @media (min-width: 1150px) {
    width: 50%;
    max-width: auto;
    height: 460px;
    margin: 55px;
    }
`

export const SlideShowCenter = styled(Image)`
    @media (min-width:668px){
    width: 100%;
    height: auto;
    margin-top: 15px;
  }
`

export const ImageFirst = styled.img`
  width: 100%;
  height: auto;
  margin-top: 15px;
  @media (min-width: 668px) {
    display:none
    }
`

export const ImageLast = styled.img`
    display:none;
    @media (min-width:668px) and (max-width: 1150px){
    display: unset;
    width: 50%;
    max-width: auto;
    height: 300px;
    margin: 15px;   
    }
  @media (min-width: 1150px) {
    display: unset;
    width: 50%;
    max-width: auto;
    height: 460px;
    margin: 15px;
    }
`