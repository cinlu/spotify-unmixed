import { Container } from 'react-bootstrap';
import './SingleItem.css';

function SingleItem( {image, name, details} ) {
  return (
    <Container className='single-item'>
        <img src={image} alt="cover art"/>
        <p> {name} </p>
        <p> {details} </p>
    </Container>
  );
}

export default SingleItem;
