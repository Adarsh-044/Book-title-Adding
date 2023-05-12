import React from 'react'
import { useState } from 'react'


const BookCreate = ({ onCreate }) => {

  const [title, setTitle] = useState('');
  const handleClick = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle('');
  }
  return (
    <div className='book-create'>
      <h3>Add a book</h3>

      <form onSubmit={handleSubmit}>
        
        <label>Title</label>
      
        <input
          className='input'
          value={title}
          onChange={handleClick}>
        </input>

        <button className='button'>
          Create
        </button>

      </form>
    </div>
  )
}

export default BookCreate