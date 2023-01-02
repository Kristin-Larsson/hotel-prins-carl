import React from 'react'
import { H1 } from 'styles/MainStyles';
import styled from 'styled-components/macro';

const GuestBookForm = ( { onFormSubmit, newThought, onSetThoughtChange, onSetNameChange, newName } ) => {

    return (
       <GuestBookFormWrapper>
        <form onSubmit={onFormSubmit}>

                <H1>How was your visit at Hotel Prins Carl?</H1>
                <label htmlFor='new-thought'>
                    <TextArea 
                        className='input-text'
                        onChange={onSetNameChange}
                        value={newName}
                        id='new-thought'
                        name='new-thought'
                        placeholder='Name'
                         />
                    <TextArea 
                        className='input-text'
                        onChange={onSetThoughtChange}
                        value={newThought}
                        id='new-thought'
                        name='new-thought'
                        placeholder='Send a greeting to Hotel Prins Carl'
                         />
                </label>
                <SendButton 
                    type='submit'>
                    <span role='img' aria-label='heart'>Send</span>
                </SendButton>
        </form>
       </GuestBookFormWrapper>
    );
};

export default GuestBookForm;

const GuestBookFormWrapper = styled.section`
  background-color: rgb(240, 236, 236);
  border: 2px solid rgb(165, 165, 165);
  height: 300px;
  width: 400px;
  box-shadow: 6px 6px;
    @media (min-width: 668px) {
    }
`

const TextArea = styled.textarea`
  resize: none;
  height: 65px;
  margin-left: 20px;
  width: 80%;
    @media (min-width: 668px) {
    }
`

const SendButton = styled.button`
  margin-left: 20px;
  margin-top: 10px;
  background-color: #ffadad;
  border-radius: 20px;
  border: none;
  padding: 7px;
  width: 250px;
  font-weight:600;
  font-size: 15px;
    @media (min-width: 668px) {
    }
`