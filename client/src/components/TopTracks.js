import './Footer.css';
import axios from "axios"; 
import { Col, Container, Row } from 'react-bootstrap';
import SingleItem from '../components/SingleItem';
import { useState, useEffect } from 'react';
import './TopTracks.css';

function TopTracks( {token} ) {
  const TOP_TRACKS_URL = "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=5"; 
  const [topTracks, setTopTracks] = useState({}); 


  useEffect(() => {
    handleGetTopTracks(); 
  }, [token])

  const handleGetTopTracks = () => {
    axios.get(TOP_TRACKS_URL, {
      headers: {
        Authorization: "Bearer " + token, 
      }, 
    })
    .then((response) => {
      console.log(response.data);
      setTopTracks(response.data); 
    })
    .catch((error) => {
      console.log(error); 
    })
  }

  return (
    <Container >
        <h5> Your Most Listened to Tracks </h5>
        <Row className='row'>
          {
          topTracks.items ? topTracks.items.map((item) => {
            return <SingleItem key={item.id} image={item.images} trackName={item.name} details={item.artists[0].name}/> }) : null
          }
        </Row>
    </Container>
  );
}

export default TopTracks;
