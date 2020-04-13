import React from 'react';
import { Image, Card } from 'semantic-ui-react';
import { IMAGE_BASE_URL } from '../../constants';

const GalleryCard = ({
  data
}) =>  {
  const {title, poster_path} = data;
  const imageURL = `${IMAGE_BASE_URL}/original/${poster_path}`;

  return (
    <Card fluid color="olive">
      <Card.Content textAlign={'center'}>
        <Image src={imageURL} size={'small'}/>
        <Card.Meta>{title}</Card.Meta>
      </Card.Content>
    </Card>
  )
}


export default GalleryCard;