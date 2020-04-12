import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const HeaderComponent = () => {
  return (
    <Container centered textAlign={'center'}> 
      <Header
        size={'huge'}
        color={'olive'}
      >
        All The Movies
      </Header>
    </Container>
  )
}
export default HeaderComponent;