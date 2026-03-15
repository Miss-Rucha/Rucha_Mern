import React, { useState, useEffect } from 'react';

const GenreFilter = ({ albums, onFilter }) => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const uniqueGenres = [...new Set(albums.map(album => album.genre).filter(Boolean))];
    setGenres(uniqueGenres);
  }, [albums]);

  const handleChange = (e) => {
    const genre = e.target.value;
    setSelectedGenre(genre);
    if (genre === '') {
      onFilter(albums);
    } else {
      onFilter(albums.filter(album => album.genre === genre));
    }
  };

  return (
    <div className="genre-filter" style={{ marginBottom: '1rem', textAlign: 'center' }}>
      <label htmlFor="genre" style={{ marginRight: '0.5rem', fontWeight: 500 }}>Filter by Genre:</label>
      <select id="genre" value={selectedGenre} onChange={handleChange} className="btn">
        <option value="">All</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;