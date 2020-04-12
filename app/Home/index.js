import React from 'react';
// import { Container, Header } from 'semantic-ui-react';
import SearchBar from '../SearchBar';
import Gallery from '../Gallery';

const HeaderComponent = () => {
  return (
    <div>
      <SearchBar />
      <Gallery />
    </div>
  )
}
export default HeaderComponent;