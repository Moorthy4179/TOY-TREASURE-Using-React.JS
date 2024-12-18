import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  const results = location.state?.results || [];

  return (
    <div>
      <h1>Search Results</h1>
      {results.length > 0 ? (
        <div>
          <p>Results for "{query}":</p>
          <ul>
            {results.map(result => (
              <li key={result.id}>
                <h3>{result.title}</h3>
                <p>{result.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Sorry, no results found for "{query}".</p>
      )}
    </div>
  );
};

export default SearchResults;
