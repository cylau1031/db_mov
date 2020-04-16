const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const axios = require('axios');

const { setCacheValue, getCacheValue } = require('./utils/cache');
const { API_BASE_URL } = require('./constants');

const apiKey = `api_key=${process.env.MOVIE_DB_API_KEY}`;

app.use(express.static(__dirname + '/dist'));

app.get('/popular_movies', async (req, res) => {
  const cacheKey = 'popular_movies';
  const cacheValue = getCacheValue(cacheKey);
  if (cacheValue) {
    return res.send(cacheValue);
  } else {
    try {
      const popularMovies = await axios.get(`${API_BASE_URL}/movie/popular?${apiKey}`);
      setCacheValue(cacheKey, popularMovies.data.results)
      res.send(popularMovies.data.results)
    } catch(err) {
      console.log('ERROR-GETTING-POPULAR-MOVIES', err)
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
      const searchMovies = await axios.get(`${API_BASE_URL}/search/movie?${apiKey}&query=${query}`);
      setCacheValue(cacheKey, searchMovies.data.results);
      res.send(searchMovies.data.results);
    } catch(err){
      console.log(`ERROR-GETTING-SEARCH-MOVIES SEARCHTERM=${query}`, err)
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
      const movie = await axios.get(`${API_BASE_URL}/movie/${id}?${apiKey}`)
      const credits = await axios.get(`${API_BASE_URL}/movie/${id}/credits?${apiKey}`)
      const response = {
        movie: movie.data,
        credits: credits.data,
      }
      setCacheValue(cacheKey, response);
      res.send(response);
    } catch (err) {
      console.log(`ERROR-GETTING-MOVIE-BY-ID ID=${id}`, err)
    }
  }
})

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(port, () => console.log(`App is listening at http://localhost:${port}`))