import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Link
} from "react-router-dom";
import { Grid, Container } from 'semantic-ui-react';
import GalleryCard from '../GalleryCard';

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
    <Container>
      <p>Most Popular Movies</p>
      <Grid columns={5}>
        { 
          movies.map(movie => {
            return (
              <Grid.Column>
              <Link to={`/movies/${movie.id}`}>
                <GalleryCard
                  data={movie}
                />
              </Link>
              </Grid.Column>
            )
          })
        }
      </Grid>
    </Container>
  )
}


export default Gallery;