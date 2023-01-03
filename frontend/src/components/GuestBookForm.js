import React from 'react'
import { H1 } from 'styles/MainStyles';
import styled from 'styled-components/macro';

const GuestBookForm = ( { onFormSubmit, newMessage, onSetMessageChange, onSetNameChange, newName, onSetCountryChange, newCountry } ) => {

    return (
       <GuestBookFormWrapper>
        <form onSubmit={onFormSubmit}>

        <H1>How was your stay at Hotel Prins Carl?</H1>
          <label htmlFor='new-message'>
            <TextAreaName
              className='input-text'
              onChange={onSetNameChange}
              value={newName}
              id='new-message'
              name='new-message'
              placeholder='Name'
            />
            <TextArea 
              className='input-text'
              onChange={onSetMessageChange}
              value={newMessage}
              id='new-message'
              name='new-message'
              placeholder='Send a greeting to Hotel Prins Carl'
              />
          <div>
            <CountryWrapper>
            <SelectCountry 
             onChange={onSetCountryChange}
             value={newCountry}
             >
            <option value="">Select option</option>
            <option value="Sweden">🇸🇪</option>
            <option value="Denmark">🇩🇰</option>
            <option value="Germany">🇩🇪</option>
            </SelectCountry>
          <TextAreaCountry 
             className='input-text'
             onChange={onSetCountryChange}
             value={newCountry}
              id='new-thought'
              name='new-thought'
              placeholder='Country'
              />
            </CountryWrapper>
          </div>
                </label>
                <SendButton 
                    type='submit'>
                    Send
                </SendButton>
        </form>
       </GuestBookFormWrapper>
    );
};

export default GuestBookForm;

const GuestBookFormWrapper = styled.section`
  background: #ae9d72;
	background-image: url("https://i.imgur.com/0kjMcUe.png");
  border: 2px solid rgb(165, 165, 165);
  height: 300px;
  width: 100%;
    @media (min-width: 668px) {
    width: 600px;
    height: 400px;
    }
`
const TextAreaName = styled.textarea`
  resize: none;
  height: 20px;
  margin-left: 20px;
  width: 80%;
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

const TextAreaCountry = styled.textarea`
  resize: none;
  height: 30px;
  margin-left: 20px;
  width: 80%;
    @media (min-width: 668px) {
    }
`

const SelectCountry = styled.select`
  resize: none;
  height: 30px;
  width: 80px;
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
const CountryWrapper = styled.div`
  display: flex;
  margin-left: 20px;
  border-radius: 20px;
  border: none;
  height: 30px;
  width: 80%;
  font-weight:600;
  font-size: 15px;
    @media (min-width: 668px) {
    }
`