import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Icon } from 'semantic-ui-react';

const HeaderComponent = () => {
  return (
    <Container textAlign="center">
      <Link to={'/'}>
        <Icon name="film" size="massive" color="olive"/>
        <Header
          size="huge"
          color="olive"
        >
          All The Movies
        </Header>
      </Link>
    </Container>
  )
}
export default HeaderComponent;