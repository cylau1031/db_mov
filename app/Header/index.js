import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const HeaderComponent = () => {
  return (
    <div>
      <Container fluid text> 
        <Header
          size={'large'}
          color={'olive'}
        >
          All The Movies
        </Header>
      </Container>
    </div>
  )
}
export default HeaderComponent;