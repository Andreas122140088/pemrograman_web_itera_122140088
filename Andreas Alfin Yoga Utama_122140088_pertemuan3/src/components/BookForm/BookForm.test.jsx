// src/components/BookForm/BookForm.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookForm from './BookForm';
import '@testing-library/jest-dom';

describe('BookForm', () => {
  const mockSubmit = jest.fn();

  beforeEach(() => {
    mockSubmit.mockClear();
  });

  it('renders input fields', () => {
    render(<BookForm onSubmit={mockSubmit} />);
    expect(screen.getByPlaceholderText('Judul')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Penulis')).toBeInTheDocument();
  });

  it('submits form with valid input', () => {
    render(<BookForm onSubmit={mockSubmit} />);
    fireEvent.change(screen.getByPlaceholderText('Judul'), { target: { value: 'Buku A' } });
    fireEvent.change(screen.getByPlaceholderText('Penulis'), { target: { value: 'Penulis A' } });
    fireEvent.click(screen.getByText(/Tambah Buku/i));
    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit.mock.calls[0][0].title).toBe('Buku A');
  });

  it('does not submit if title or author is empty', () => {
    render(<BookForm onSubmit={mockSubmit} />);
    fireEvent.click(screen.getByText(/Tambah Buku/i));
    expect(mockSubmit).not.toHaveBeenCalled();
  });
});
