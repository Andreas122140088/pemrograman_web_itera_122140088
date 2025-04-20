// src/components/BookList/BookList.jsx
import React from 'react';
import PropTypes from 'prop-types';

function BookList({ books, onEdit, onDelete }) {
  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          <strong>{book.title}</strong> - {book.author} ({book.status})
          <button onClick={() => onEdit(book)}>Edit</button>
          <button onClick={() => onDelete(book.id)}>Hapus</button>
        </li>
      ))}
    </ul>
  );
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
