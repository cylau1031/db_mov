const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const axios = require('axios');
const { setCacheValue, getCacheValue } = require('./server/cache');

const apiKey = 'api_key=c311f65d0523457da6449c1f7a89bf46';
const baseURL = 'https://api.themoviedb.org/3'

app.use(express.static(__dirname + '/dist'));

app.get('/popular_movies', async (req, res) => {
  const cacheKey = 'popular_movies';
  const cacheValue = getCacheValue(cacheKey);
  if (cacheValue) {
    return res.send(cacheValue);
  } else {
    try {
      const popularMovies = await axios.get(`${baseURL}/movie/popular?${apiKey}`);
      setCacheValue(cacheKey, popularMovies.data.results)
      res.send(popularMovies.data.results)
    } catch(err) {
      console.log('err', err)
    }
  }
})

app.get('/search_movies', async (req, res) => {
  const { query } = req.query;
  const cacheKey = `search_movies-${query}`;
  const cacheValue = getCacheValue(cacheKey);
  if (cacheValue) {
    return res.send(cacheValue);
  } else {
    try {
      const searchMovies = await axios.get(`${baseURL}/search/movie?${apiKey}&query=${query}`);
      setCacheValue(cacheKey, searchMovies.data.results);
      res.send(searchMovies.data.results);
    } catch(err){
      console.log('ERRR----', err)
    }
  }
})

app.get('/movie/:id', async (req, res) => {
  const { id } = req.params;
  const cacheKey = `movie-${id}`;
  const cacheValue = getCacheValue(cacheKey);
  if (cacheValue) {
    return res.send(cacheValue);
  } else {
    try {
      const movie = await axios.get(`${baseURL}/movie/${id}?${apiKey}`)
      const credits = await axios.get(`${baseURL}/movie/${id}/credits?${apiKey}`)
      const response = {
        movie: movie.data,
        credits: credits.data,
      }
      setCacheValue(cacheKey, response);
      res.send(response);
    } catch (err) {
      console.log('ERRR----', err)
    }
  }
})

app.listen(port, () => console.log(`App is listening at http://localhost:${port}`))