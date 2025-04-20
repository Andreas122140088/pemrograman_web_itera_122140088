// src/components/BookList/BookList.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookList from './BookList';
import '@testing-library/jest-dom';

describe('BookList', () => {
  const books = [
    { id: 1, title: 'Book One', author: 'Author A', status: 'milik' },
    { id: 2, title: 'Book Two', author: 'Author B', status: 'baca' },
  ];

  const mockEdit = jest.fn();
  const mockDelete = jest.fn();

  it('renders books', () => {
    render(<BookList books={books} onEdit={mockEdit} onDelete={mockDelete} />);
    expect(screen.getByText('Book One')).toBeInTheDocument();
    expect(screen.getByText('Book Two')).toBeInTheDocument();
  });

  it('calls onEdit when edit button clicked', () => {
    render(<BookList books={books} onEdit={mockEdit} onDelete={mockDelete} />);
    fireEvent.click(screen.getAllByText('Edit')[0]);
    expect(mockEdit).toHaveBeenCalledWith(books[0]);
  });

  it('calls onDelete when delete button clicked', () => {
    render(<BookList books={books} onEdit={mockEdit} onDelete={mockDelete} />);
    fireEvent.click(screen.getAllByText('Hapus')[0]);
    expect(mockDelete).toHaveBeenCalledWith(1);
  });
});
