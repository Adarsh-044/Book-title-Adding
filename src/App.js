import React from 'react'
import { useState } from 'react'

import BookCreate from './components/BookCreate'
import BookList from "./components/BookList"


const App = () => {
      const [books, setBooks] = useState([]);

      const createBook = (title) => {
            const newArray = [
                  ...books,
                  {
                        id: Math.round(Math.random() * 999),
                        title
                  }
            ];
            setBooks(newArray);
      }

      const editBookById = (id, newTitle) => {
            const updatedBooks = books.map((book) => {
                  if (book.id === id) {
                        return { ...book, title: newTitle }
                  }
                  else
                        return book;
            })
            setBooks(updatedBooks);
      }

      const deleteBookById = (id) => {
            const updatedBooks = books.filter((book) => {
                  return book.id !== id;
            });

            setBooks(updatedBooks);
      }

      return (
            <div className='app'>
                  <BookList
                        books={books}
                        onDelete={deleteBookById}
                        onEdit={editBookById}
                  />
                  <BookCreate onCreate={createBook} />
            </div>
      )
}

export default App