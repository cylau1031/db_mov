## Application
Single page clientside-rendered application displaying movies and movie details with information from The Movie Database.

## Tech Stack
- React: 
Front End library used to build out a single page application UI.
- React-Router-Dom: 
Library used for single page application navigation on the client side making it easy to route between pages/components
- Node:
Used for server-side environment where client side requests can be made
- Express:
Framework for Node which provides simple funtionality to simple and clean development of routes
- Webpack and Babel:
Transpile to ES5 and bundle files into 'dist' directory
- Semantic-UI:
UI-framework providing simple components and mobile responsiveness.

## API
- [The Movie Database API v3](https://developers.themoviedb.org/3/getting-started/introduction): Api to query movie information.
## Features
- Header allows you to navigate back to home page
- Home page display search bar and all top popular movies
- Search bar provides search results bases on movie titles, and selecting an option redirects that movie's details page
- Movie details page includes general information

## Technical Features:
- Routes:
* GET popular_movies : returns current top popular movies from MovieDB api
* GET search_movies?query=(INSERT SEARCH TERM) : returns all movies matching the search term entered on the client side search bar
* GET movie/:id : returns single movie with matching "id" and its related credits with cast information

- Cache:
A simple local server cache implemented to save results of api call to The Movie Database. It it set to update the results on each new call if the current cached data is more than 1 hour old.

## Run application
# Locally

1) Install dependencies with command below
```js
npm install
```

2) Update scripts with your Movie DB API key
- Go to package.json
- In "start" script, add your api key after "MOVIE_DB_API_KEY=". See below example
```js
// Old
"start": "node ./server/app.js MOVIE_DB_API_KEY=INSERT_KEY_HERE",
// New
"start": "node ./server/app.js MOVIE_DB_API_KEY=1234567",
```

3) Build files with webpack
```js
npm run build
```

4) Run server
```js
npm start
```

5) Visit localhost:3000 in web browser to see application running

# Locally for development (includes hot reload)
1) Install dependencies with command below
```js
npm install
```

2) Update scripts with your Movie DB API key
- Go to package.json
- In "start:dev" script, add your api key after "MOVIE_DB_API_KEY=". See below example
```js
// Old
"start:dev": "node ./server/app.js MOVIE_DB_API_KEY=INSERT_KEY_HERE",
// New
"start:dev": "nodemon ./server/app.js MOVIE_DB_API_KEY=1234567",
```

3) In one terminal, build files with webpack
```js
npm run build:dev
```

4) In another terminal, run server
```js
npm start:dev
```

5) Visit localhost:3000 in web browser to see application running

## Considerations and Improvements
- Current caching is a simplified implementation, but if requests grow or become varied, a more robust storage can be used such as Redis
- API keys are added in the package.json as process.env variable. While this is quick to get started, further develop would benefit from a .env file or pulling keys from a secure 3rd party source during build
- Further testing can be implemented fully with react-test-library, jest, and supertest
