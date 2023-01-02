import React from 'react'
import { formatRelative } from 'date-fns'
import styled from 'styled-components/macro';

const GuestBookList = ({ thought }) => {

    return (
    <GuestBookListWrapper>
         <MessageCard key={thought._id} >
            <Message>{thought.name}</Message>
            <Message>{thought.message}</Message>
            <Time> {formatRelative(new Date(thought.createdAt), new Date())}</Time>
        </MessageCard>   
    </GuestBookListWrapper>
    );
};

export default GuestBookList

const GuestBookListWrapper = styled.section`
  border: 2px solid rgb(165, 165, 165);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 400px;
  background-color: white;
  margin-top: 20px;
  box-shadow: 6px 6px;
    @media (min-width: 668px) {
    }
`

const MessageCard = styled.form`
  height: 150px;
  width: 90%;
  overflow-wrap: break-word; 
    @media (min-width: 668px) {
    }
`

const Message = styled.p`
  font-size: large;
    @media (min-width: 668px) {
    }
`

const Time = styled.p`
  margin-right: 10px;
    @media (min-width: 668px) {
    }
`