import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () =>  {
  const [movie, setMovie] = useState();
  const {id} = useParams();
  const fetchMovie = async () => {
    const response = await axios.get(`/movie/${id}`);
    setMovie(response.data);
  }

  useEffect(() => {
    fetchMovie()
  }, [])

  return (
    <div>
      <p>Movie Details</p>
      { movie && movie.title }
    </div>
  )
}


export default MovieDetails;