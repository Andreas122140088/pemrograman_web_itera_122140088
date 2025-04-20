// src/components/BookForm/BookForm.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function BookForm({ onSubmit, existingBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('milik');

  useEffect(() => {
    if (existingBook) {
      setTitle(existingBook.title);
      setAuthor(existingBook.author);
      setStatus(existingBook.status);
    }
  }, [existingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;

    const book = {
      id: existingBook ? existingBook.id : Date.now(),
      title,
      author,
      status,
    };

    onSubmit(book);
    setTitle('');
    setAuthor('');
    setStatus('milik');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Judul" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Penulis" value={author} onChange={e => setAuthor(e.target.value)} />
      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="milik">Milik</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>
      <button type="submit">{existingBook ? 'Update' : 'Tambah Buku'}</button>
    </form>
  );
}

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  existingBook: PropTypes.object,
};

export default BookForm;
