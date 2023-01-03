import styled from 'styled-components';

export const OuterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-items: center;
    width: 100%;
`;

export const InnerWrapper = styled.div`
    border: 2px solid green;
    background-color: white;
    width: 80%;
    @media (min-width: 668px) {
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