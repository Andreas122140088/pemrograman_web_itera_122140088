// src/pages/Stats/Stats.jsx
import React from 'react';
import { useBooks } from '../../context/BookContext';
import useBookStats from '../../hooks/useBookStats';

function Stats() {
  const { books } = useBooks();
  const stats = useBookStats(books);

  return (
    <div className="stats">
      <h2>Statistik Buku</h2>
      <p>Total Buku: {stats.total}</p>
      <p>Dimiliki: {stats.owned}</p>
      <p>Sedang Dibaca: {stats.reading}</p>
      <p>Ingin Dibeli: {stats.wishlist}</p>
    </div>
  );
}

export default Stats;
