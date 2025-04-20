// src/context/BookContext.js
import React, { createContext, useContext, useReducer } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const BookContext = createContext();

const bookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload];
    case 'UPDATE_BOOK':
      return state.map(book =>
        book.id === action.payload.id ? action.payload : book
      );
    case 'DELETE_BOOK':
      return state.filter(book => book.id !== action.payload);
    default:
      return state;
  }
};

export function BookProvider({ children }) {
  const [books, setBooks] = useLocalStorage('books', []);

  const dispatch = (action) => {
    setBooks(bookReducer(books, action));
  };

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  );
}

export function useBooks() {
  const context = useContext(BookContext);
  if (!context) throw new Error('useBooks must be used within a BookProvider');
  return context;
}
