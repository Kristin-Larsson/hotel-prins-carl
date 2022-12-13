import styled from 'styled-components';

export const OuterWrapper = styled.div`
    border: 2px solid blue;
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const InnerWrapper = styled.div`
    border: 2px solid orange;
    display: flex;
    justify-content: center;
    width: 80%;
    @media (min-width: 668px) {
    }
`;