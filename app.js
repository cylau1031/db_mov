const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const axios = require('axios');

const apiKey = 'api_key=c311f65d0523457da6449c1f7a89bf46';
const baseURL = 'https://api.themoviedb.org/3'

app.use(express.static(__dirname + '/dist'));

app.get('/popular_movies', async (req, res) => {
  try {
    const popularMovies = await axios.get(`${baseURL}/movie/popular?${apiKey}`);
    res.send(popularMovies.data.results)
  } catch(err) {
    console.log('err', err)
  }
})

app.get('/search_movies', async (req, res) => {
  const { query } = req.query;
  try {
    const searchMovies = await axios.get(`${baseURL}/search/movie?${apiKey}&query=${query}`);
    res.send(searchMovies.data.results);
  } catch(err){
    console.log('ERRR----', err)
  }
  
})

app.get('/movie/:id', async (req, res) => {
  const { id } = req.params;
  const movie = await axios.get(`${baseURL}/movie/${id}?${apiKey}`)
  res.send(movie.data)
})

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`App is listening at http://localhost:${port}`))