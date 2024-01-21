import { Container } from 'react-bootstrap';
import './SingleItem.css';

function SingleItem( {image, trackName, details} ) {
  return (
    <Container className='single-item'>
        <img src={image} alt="cover art"/>
        <p> {trackName} </p>
        <p> {details} </p>
    </Container>
  );
}

export default SingleItem;
