import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Link
} from "react-router-dom";

const Gallery = () =>  {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    const response = await axios.get(`/popular_movies`);
    setMovies(response.data);
  };

  useEffect(()=> {
    fetchMovies();
  }, []);

  return (
    <div>
      <p>Most Popular Movies</p>
      {movies.map(movie => {
        // console.log('movie.id', movie.id)
        return (
          <p>
            Name: <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </p>
        )
      })}
    </div>
  )
}


export default Gallery;