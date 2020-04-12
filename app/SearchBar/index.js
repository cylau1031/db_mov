import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Search } from 'semantic-ui-react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    if (searchTerm) {
      const response = await axios.get(`/search_movies?query=${searchTerm}`)
      setMovies(response.data);
    }
  }

  useEffect (() => {
    fetchMovies()
  }, [searchTerm])
  
  const resultsComponent = ({title}) => (
    <span>
      {title}
    </span>
  );

  return (
    <Container textAlign={'center'}>
      <Search 
        onSearchChange={(e, { value }) => setSearchTerm(value)}
        value={searchTerm}
        results={movies}
        resultRenderer={resultsComponent}
      />
    </Container>
  )
}


export default SearchBar;