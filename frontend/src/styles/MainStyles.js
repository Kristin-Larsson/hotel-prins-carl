import styled from 'styled-components';

export const OuterWrapper = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-items: center;
    width: 100%;
`;

export const InnerWrapper = styled.div`
    border: 3px solid hotpink;
    background-color: white;
    width: 80%;
    height: 100vh;
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