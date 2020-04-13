import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Link
} from "react-router-dom";
import { Grid, Container, Header, Divider } from 'semantic-ui-react';
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
      <Header size="large">Most Popular Movies</Header>
      <Grid columns={5} stackable>
        { 
          movies.map(movie => {
            return (
              <Grid.Column key={movie.id}>
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