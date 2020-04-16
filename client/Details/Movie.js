import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Container, Header, Image, Label, List, Card, Grid} from 'semantic-ui-react';
import { IMAGE_BASE_URL } from '../../constants';

const MovieDetails = () =>  {
  const [movie, setMovie] = useState();
  const [credits, setCredits] = useState();
  const { id } = useParams();

  const fetchMovie = async () => {
    const response = await axios.get(`/movie/${id}`);
    setMovie(response.data.movie);
    setCredits(response.data.credits);
  }
  useEffect(() => {
    fetchMovie()
  }, [])

  return (
    <Container className="body-container">
      {
        movie && (
          <Grid stackable>
            <Grid.Column width={5} >
            <Image src={`${IMAGE_BASE_URL}/w342/${movie.poster_path}`} rounded />
            </Grid.Column>
            <Grid.Column width={10} >
            <Container>
              <Header size="large">{movie.title}</Header>
              <Header size="medium">Synopsis:</Header>
              <p>{movie.overview}</p>
              <Header size="medium">Release Date:</Header>
              <p>{movie.release_date}</p>
              <Header size="medium">Genres:</Header>
              {
                movie.genres.map(genre => {
                  return (
                    <Label as='a' horizontal color='olive' key={genre.name} className="label">
                      {genre.name}
                    </Label>
                  )
                })
              }
              <Header size="medium"><a href={movie.homepage} target="_blank">Website</a></Header>
            </Container>
            </Grid.Column>
          </Grid>
        )
      }
      <Container className="list-container">
        <Header size="medium">Cast:</Header>
        <List bulleted >
        {
          credits && credits.cast.map(person => {
            return (
              <List.Item key={person.id}>
                <List.Content>
                  {person.name} as "{person.character}"
                </List.Content>
              </List.Item>
              
            )
          })
        }
        </List>
      </Container>
    </Container>
  )
}


export default MovieDetails;