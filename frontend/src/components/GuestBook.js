import { useState, useEffect } from 'react'
import GuestBookForm from 'components/GuestBookForm'
import GuestBookList from 'components/GuestBookList'

const GuestBook = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState('')
  const [newName, setNewName] = useState('')

  const handleOnNewThought = (event) => {
    setNewThought(event.target.value)
  }

  const handleOnNewName = (event) => {
    setNewName(event.target.value)
  }

  useEffect(()=> {
    fetchThoughts();
  }, [])

  const fetchThoughts = () => {
    fetch('https://hotel-prins-carl-7xvds2m6na-lz.a.run.app/guestbook')
    .then(res => res.json())
    .then(data => setThoughts(data))
  }


//Button Send Happy Thoughts
  const handleFormSubmit = (event) => {
    event.preventDefault()

    const options = { 
      method: 'POST', 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newThought, name: newName }),
    }
  
    fetch('https://hotel-prins-carl-7xvds2m6na-lz.a.run.app/guestbook', options)
      .then((res) => res.json())
      .then(() => fetchThoughts())
      .then(()=> setNewThought(''))
      .finally(()=> setNewName('')) //Extract it to another function to cleans up the input
  }

  
  return (
    <section className='mainWrapper'>
    <GuestBookForm
      onFormSubmit={handleFormSubmit}
        newThought={newThought}
        onSetThoughtChange={handleOnNewThought}
        newName={newName}
        onSetNameChange={handleOnNewName}
        />

      {thoughts.map((thought)=> (
      <GuestBookList
        key={thought._id}
        thought={thought}
        />
      ))};
    </section>
  );
};

export default GuestBook