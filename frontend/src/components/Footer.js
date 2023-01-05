import React from 'react';
import { OuterWrapper, InnerWrapperFooter, P, H2 } from 'styles/MainStyles';
import styled from 'styled-components'

const Footer = () => {

    return (
    <OuterWrapper>
        <InnerWrapperFooter>
        <Title>NEWS LETTER</Title>
        <Text>Would you like to receive our newsletter?</Text>
        <InputButtonWrapper>
        <label htmlFor='new-message'>
            <FooterInput
              type="email"
              placeholder='Email'
              />
        </label>
            <SendButton type="submit">SEND</SendButton>
        </InputButtonWrapper>
        <TitleLeft>LINKS</TitleLeft>
        <TextLeft>Book a room</TextLeft>
        <TextLeft>Contact us</TextLeft>
        <TextLeft>Information</TextLeft>
        </InnerWrapperFooter>
    </OuterWrapper>
    )
}

export default Footer;

const Title = styled(H2)`
font-size: 18px;
margin-bottom: 0px;
font-weight:500;
`
const TitleLeft = styled(Title)`
text-align: left;
font-size: 16px;
margin: 0% 0% 0% 10%;
`

const Text = styled(P)`
font-size: 15px;
text-align: center;
line-height: 20px;
`

const TextLeft = styled(P)`
text-align: left;
font-size: 14px;
`

const FooterInput = styled.input`
font-size: 14px;
text-align: center;
width: 200px;
height: 30px;
`

const SendButton = styled.button`
margin-top: 10px;
font-size: 14px;
text-align: center;
width: 210px;
height: 30px;
border: none;
background-color:#646f85;
color: white;
`

const InputButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
`

