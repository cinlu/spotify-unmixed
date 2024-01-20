import { Container } from 'react-bootstrap';
import './Footer.css';

function SingleItem( {image} ) {
  return (
    <Container className='single-item'>
        <img src={image}/>
        
        
    </Container>
  );
}

export default SingleItem;
