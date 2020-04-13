import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Icon } from 'semantic-ui-react';

const HeaderComponent = () => {
  return (
    <Container textAlign="center" data-testid="header-container">
      <Link to={'/'}>
        <Icon
          name="film"
          size="massive"
          color="olive"
          data-testid="header-icon"
        />
        <Header
          size="huge"
          color="olive"
          data-testid="header-name"
        >
          All The Movies
        </Header>
      </Link>
    </Container>
  )
}
export default HeaderComponent;