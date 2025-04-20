// src/pages/Home/Home.jsx
import React, { useState } from 'react';
import { useBooks } from '../../context/BookContext';
import BookForm from '../../components/BookForm/BookForm';
import BookList from '../../components/BookList/BookList';
import BookFilter from '../../components/BookFilter/BookFilter';

function Home() {
  const { books, dispatch } = useBooks();
  const [editingBook, setEditingBook] = useState(null);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  const handleSubmit = (book) => {
    dispatch({ type: editingBook ? 'UPDATE_BOOK' : 'ADD_BOOK', payload: book });
    setEditingBook(null);
  };

  const handleEdit = (book) => {
    setEditingBook(book);
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_BOOK', payload: id });
  };

  const filteredBooks = books
    .filter(b => (filter ? b.status === filter : true))
    .filter(b => b.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="home">
      <h1>Manajemen Buku Pribadi</h1>
      <BookForm onSubmit={handleSubmit} existingBook={editingBook} />
      <BookFilter filter={filter} setFilter={setFilter} search={search} setSearch={setSearch} />
      <BookList books={filteredBooks} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default Home;
