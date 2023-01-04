import { useState, useEffect } from 'react'
import GuestBookForm from 'components/GuestBookForm'
import GuestBookList from 'components/GuestBookList'
import { OuterWrapper, InnerWrapper } from 'styles/MainStyles';

const GuestBook = () => {
  const [messages, setMessage] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [newName, setNewName] = useState('')
  const [newCountry, setNewCountry] = useState('')

  const handleOnNewMessage = (event) => {
    setNewMessage(event.target.value)
  }

  const handleOnNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleOnNewCountry = (event) => {
    setNewCountry(event.target.value)
  }

  useEffect(()=> {
    fetchMessage();
  }, [])

  const fetchMessage = () => {
    fetch('https://hotel-prins-carl-7xvds2m6na-lz.a.run.app/guestbook')
    .then(res => res.json())
    .then(data => setMessage(data))
  }


//Button Send Happy Thoughts
  const handleFormSubmit = (event) => {
    event.preventDefault()

    const options = { 
      method: 'POST', 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newMessage, name: newName, country: newCountry }),
    }
  
    fetch('https://hotel-prins-carl-7xvds2m6na-lz.a.run.app/guestbook', options)
      .then((res) => res.json())
      .then(() => fetchMessage())
      .then(()=> setNewMessage(''))
      .then(()=> setNewCountry(''))
      .finally(()=> setNewName('')) //Extract it to another function to cleans up the input
  }

  
  return (
    <OuterWrapper>
    <InnerWrapper>
    <GuestBookForm
        onFormSubmit={handleFormSubmit}
        newMessage={newMessage}
        onSetMessageChange={handleOnNewMessage}
        newName={newName}
        onSetNameChange={handleOnNewName}
        newCountry={newCountry}
        onSetCountryChange={handleOnNewCountry}
        />

      {messages.map((message)=> (
      <GuestBookList
        key={message._id}
        message={message}
        />
      ))};
    </InnerWrapper> 
    </OuterWrapper>
  );
};

export default GuestBook
