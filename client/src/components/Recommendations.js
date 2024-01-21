import './Footer.css';
import { Container } from 'react-bootstrap';


function Recommendations() {
  return (
    <Container>
        <h5> Based on Your Recent Favorites </h5>
        <p className='subheading'>We think you should give these a listen...</p>
        
    </Container>
  );
}

export default Recommendations;
