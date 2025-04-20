// src/hooks/useBookStats.test.js
import { renderHook } from '@testing-library/react';
import useBookStats from './useBookStats';

describe('useBookStats', () => {
  it('calculates stats correctly', () => {
    const books = [
      { id: 1, status: 'milik' },
      { id: 2, status: 'baca' },
      { id: 3, status: 'beli' },
      { id: 4, status: 'baca' },
    ];

    const { result } = renderHook(() => useBookStats(books));
    expect(result.current.total).toBe(4);
    expect(result.current.owned).toBe(1);
    expect(result.current.reading).toBe(2);
    expect(result.current.wishlist).toBe(1);
  });
});
