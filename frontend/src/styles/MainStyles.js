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

export const H1 = styled.h1`
    font-family: 'Playfair Display', serif;
    text-align: center;
    font-size: 20px;
    color: black;
    @media (min-width: 668px) {
    font-size: 30px;   
    }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`