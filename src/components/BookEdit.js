import React from 'react'
import { useState } from 'react'

const BookEdit = ({ book, onSubmit }) => {

  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, title);
    setTitle('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='book-edit'
    >
      <label>Title</label>
      <input
        value={title}
        onChange={handleChange}
        className='input' />
      <button
        className='button is-primary' >
        Save
      </button>
    </form>
  )
}

export default BookEdit