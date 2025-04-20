// src/components/BookFilter/BookFilter.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookFilter from './BookFilter';

describe('BookFilter', () => {
  const setFilter = jest.fn();
  const setSearch = jest.fn();

  it('updates filter and search', () => {
    render(
      <BookFilter filter="" setFilter={setFilter} search="" setSearch={setSearch} />
    );

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'beli' } });
    expect(setFilter).toHaveBeenCalledWith('beli');

    fireEvent.change(screen.getByPlaceholderText('Cari buku...'), {
      target: { value: 'React' },
    });
    expect(setSearch).toHaveBeenCalledWith('React');
  });
});
