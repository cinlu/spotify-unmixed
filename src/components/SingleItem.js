import { Container } from 'react-bootstrap';
import './SingleItem.css';

function SingleItem( {image, name, details, url} ) {
  const handleClick = () => {
    window.open(url); 
  }
  return (
      <Container className='single-item' onClick={handleClick}>
        <img className='coverArt' src={image} alt="cover art"/>
        <p className='name'> {name} </p>
        <p className='subheading'> {details} </p>
      </Container>
    
  );
}

export default SingleItem;
