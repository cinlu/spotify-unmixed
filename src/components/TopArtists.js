import axios from "axios"; 
import { Container, Row } from 'react-bootstrap';
import SingleItem from '../components/SingleItem';
import { useState, useEffect } from 'react';

function TopArtists({token}) {
  const TOP_ARTISTS_URL = "https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=5"; 
  const [topArtists, setTopArtists] = useState({}); 


  useEffect(() => {
    handleGetTopTracks(); 
  }, [token])

  const handleGetTopTracks = () => {
    axios.get(TOP_ARTISTS_URL, {
      headers: {
        Authorization: "Bearer " + token, 
      }, 
    })
    .then((response) => {
      setTopArtists(response.data); 
    })
    .catch((error) => {
      console.log(error); 
    })
  }

  return (
    <Container>
        <h5> Your Most Listened to Artists </h5>
        <p className='subheading'>These are your favorite artists of all time</p>
        <Row className='row'>
          {
          topArtists.items ? topArtists.items.map((item) => {
            return <SingleItem key={item.id} image={item.images[1].url} name={item.name} url={item.uri} /> }) : null
          }
        </Row>
    </Container>
  );
}

export default TopArtists;
