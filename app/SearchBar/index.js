import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Search } from 'semantic-ui-react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  let history = useHistory();

  const fetchMovies = async () => {
    if (searchTerm) {
      const response = await axios.get(`/search_movies?query=${searchTerm}`)
      setMovies(response.data);
    }
  }

  useEffect (() => {
    fetchMovies()
  }, [searchTerm])

  const handleResultSelection = (e, {result}) => {
    history.push(`/movies/${result.id}`)
  }
  
  const resultsComponent = ({id, title}) => (
    <Link to={`/movies/${id}`}>
      <span data-testid="search-result">
        {title}
      </span>
    </Link>
  );

  return (
    <Container className="body-container">
      <Search 
        onSearchChange={(e, { value }) => setSearchTerm(value)}
        value={searchTerm}
        results={movies}
        resultRenderer={resultsComponent}
        onResultSelect={handleResultSelection}
        data-testid="search-bar"
      />
    </Container>
  )
}


export default SearchBar;