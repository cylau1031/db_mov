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
    console.log('result handler ', result)
    history.push(`/movies/${result.id}`)
  }
  
  const resultsComponent = ({id, title}) => (
    <Link to={`/movies/${id}`}>
      {title}
    </Link>
  );

  return (
    <Container >
      <Search 
        onSearchChange={(e, { value }) => setSearchTerm(value)}
        value={searchTerm}
        results={movies}
        resultRenderer={resultsComponent}
        onResultSelect={handleResultSelection}
      />
    </Container>
  )
}


export default SearchBar;