import React from 'react'
import { formatRelative } from 'date-fns'
import styled from 'styled-components/macro';

const GuestBookList = ({ message }) => {

    return (
    <GuestBookListWrapper>
         <MessageCard key={message._id} >
            <Message>{message.message}</Message>
            <SenderWrapper>
            <Sender>{message.name} from {message.country}</Sender>
            <Time> Written {formatRelative(new Date(message.createdAt), new Date())}</Time>
            </SenderWrapper>
        </MessageCard>   
    </GuestBookListWrapper>
    );
};

export default GuestBookList

const GuestBookListWrapper = styled.section`
  border: 2px solid brown;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 100%;
  background-color: #FCF8E3;
  margin-top: 20px;
    @media (min-width: 668px) {
    width: 600px;
    }
`
const SenderWrapper = styled.div`
  border: 2px solid green;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
  background-color: #FCF8E3;
    @media (min-width: 668px) {
    width: 100%;
    }
`


const MessageCard = styled.form`
  border: 2px solid hotpink;
  height: 150px;
  width: 90%;
  font-family: 'Playfair Display', serif;
  overflow-wrap: break-word; 
    @media (min-width: 668px) {
    }
`

const Message = styled.p`
  font-size: 20px;
    @media (min-width: 668px) {
    }
`

const Sender = styled.p`
  font-size: 14px;
    @media (min-width: 668px) {
    }
`

const Time = styled.p`
    font-size: 14px;
    @media (min-width: 668px) {
    }
`