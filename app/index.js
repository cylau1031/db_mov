import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Divider} from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Header';
import Gallery from './Gallery';
import SearchBar from './SearchBar';
import MovieDetails from './Details/Movie.js';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Divider section/>
        <Switch>
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/" component={Home} />
        </Switch>
      </Container>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
