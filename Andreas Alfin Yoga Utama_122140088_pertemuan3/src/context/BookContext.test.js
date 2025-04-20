import React from 'react';
import { render, screen } from '@testing-library/react';
import { BookProvider, useBooks } from './BookContext';
import { act } from 'react-dom/test-utils';

function DummyComponent() {
  const { books, dispatch } = useBooks();

  return (
    <div>
      <p data-testid="count">{books.length}</p>
      <button
        onClick={() =>
          dispatch({
            type: 'ADD_BOOK',
            payload: {
              id: 1,
              title: 'A',
              author: 'B',
              status: 'milik',
            },
          })
        }
      >
        Add
      </button>
    </div>
  );
}

describe('BookContext', () => {
  it('adds a book via context', () => {
    render(
      <BookProvider>
        <DummyComponent />
      </BookProvider>
    );

    expect(screen.getByTestId('count').textContent).toBe('0');

    act(() => {
      screen.getByText('Add').click();
    });

    expect(screen.getByTestId('count').textContent).toBe('1');
  });
});
