// src/components/BookFilter/BookFilter.jsx
import React from 'react';
import PropTypes from 'prop-types';

function BookFilter({ filter, setFilter, search, setSearch }) {
  return (
    <div>
      <select value={filter} onChange={e => setFilter(e.target.value)}>
        <option value="">Semua</option>
        <option value="milik">Milik</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>
      <input
        type="text"
        placeholder="Cari buku..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  );
}

BookFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default BookFilter;
