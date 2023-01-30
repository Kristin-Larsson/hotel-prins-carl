import React from 'react'
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
             onChange={onSetCountryChange}
             value={newCountry}
              id='country'
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
    )
}

export default GuestBookForm;

const GuestBookFormWrapper = styled.section`
  height: 300px;
  width: 100%;
    @media (min-width: 668px) {
    width: 600px;
    height: 400px;
    }
`

const H1 = styled.h1`
    font-family: 'Playfair Display', serif;
    text-align: center;
    font-size: 25px;
    color: black;
    margin-left: -50px;
    @media (min-width: 668px) {
    font-size: 30px;   
    }
`

const TextAreaName = styled.textarea`
  font-family: 'Playfair Display', serif;
  resize: none;
  height: 40px;
  margin-left: 20px;
  width: 80%;
  ::placeholder {
    padding-top: 5px;
    }
    @media (min-width: 668px) {
    }
`

const TextArea = styled.textarea`
  font-family: 'Playfair Display', serif;
  resize: none;
  height: 65px;
  margin-left: 20px;
  width: 80%;
  ::placeholder {
    padding-top: 15px;
    }
    @media (min-width: 668px) {
    }
`

const TextAreaCountry = styled.textarea`
  font-family: 'Playfair Display', serif;
  resize: none;
  height: 38px;
  margin-left: 10px;
  width: 90%;
  ::placeholder {
    padding-top: 5px;
    }
    @media (min-width: 668px) {
    }
`

const SelectCountry = styled.select`
  resize: none;
  height: 37px;
  width: 110px;
    @media (min-width: 668px) {
    }
`

const SendButton = styled.button`
  margin-left: 20px;
  margin-top: 15px;
  background-color: white;
  border: 1px solid black;
  padding: 7px;
  height: 37px;
  width: 100px;
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