import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Container, Header, Image, Label, List, Card} from 'semantic-ui-react';

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

  // const imageURL = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
  const clearStyles = {
    clear: "none",
    display: "inline-block",
  }
  return (
    <Container className="body-container">
      {
        movie && (
          <Container>
            <Image src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} rounded floated="left"/>
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
                    <Label as='a' horizontal color='olive'>
                      {genre.name}
                    </Label>
                  )
                })
              }
              <Header size="medium"><a href={movie.homepage} target="_blank">Website</a></Header>
            </Container>
          </Container>
        )
      }
      <Container style={clearStyles}>
      <Header size="medium">Cast:</Header>
      <List bulleted>
      {
        credits && credits.cast.map(person => {
          return (
            <List.Item>
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