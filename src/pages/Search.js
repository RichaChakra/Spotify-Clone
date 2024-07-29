import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMusic } from '../redux/actions/musicActions';

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.music.searchResults);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchMusic(query));
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for songs, artists, albums..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {searchResults.map((result) => (
          <div key={result.id}>
            <img src={result.albumArt} alt={result.title} />
            <h3>{result.title}</h3>
            <p>{result.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
