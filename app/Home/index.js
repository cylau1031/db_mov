import React from 'react';
import { Container } from 'semantic-ui-react';
import SearchBar from '../SearchBar';
import Gallery from '../Gallery';

const HeaderComponent = () => {
  return (
    <Container>
      <SearchBar />
      <Gallery />
    </Container>
  )
}
export default HeaderComponent;