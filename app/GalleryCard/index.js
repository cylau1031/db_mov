import React from 'react';
import { Image, Card } from 'semantic-ui-react';

const GalleryCard = ({
  data
}) =>  {
  const {title, poster_path} = data;
  const imageURL = `https://image.tmdb.org/t/p/original/${poster_path}`;
  
  return (
    <Card fluid>
      <Card.Content textAlign={'center'}>
        <Image src={imageURL} centered size={'small'}/>
        <Card.Meta>{title}</Card.Meta>
      </Card.Content>
    </Card>
  )
}


export default GalleryCard;