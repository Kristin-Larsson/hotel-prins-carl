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
    }
`;

export const InnerWrapperFooter = styled(InnerWrapper)`
    background-color: transparent;
    width: 90%;
    margin-top: 2px;
    height: 27vh;
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
    @media (min-width: 668px) {
    font-size: 20px;   
    }
`;

export const Section = styled.section`
position: relative;
margin-top: 10px;
height: 100vh;
width: 100%
`
export const LastSection = styled(Section)`
position: aboslute;
margin-top: 0;
height: 73vh;
background: white;
`


export const Image = styled.img`
  width: 100%;
  height: auto;
  margin-top: 15px;
`