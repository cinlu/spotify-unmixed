import axios from "axios"; 
import { Container, Row } from 'react-bootstrap';
import SingleItem from '../components/SingleItem';
import { useState, useEffect } from 'react';
import './TopTracks.css';

function TopTracks( {token} ) {
  const TOP_TRACKS_URL = "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=5"; 
  const [topTracks, setTopTracks] = useState({}); 
  const image = "https://i.scdn.co/image/ab67616d00001e028887db2fad43dcb74dabc5e5"; 


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
      // console.log(response.data);
      setTopTracks(response.data); 
    })
    .catch((error) => {
      console.log(error); 
    })
  }

  return (
    <Container >
        <h5> Your Most Listened to Tracks </h5>
        <p className='subheading'>These are your favorite tracks of all time</p>
        <Row className='row'>
          {
          topTracks.items ? topTracks.items.map((item) => {
            return ( 
              <SingleItem key={item.id} image={item.album.images[1].url} name={item.name} details={item.artists[0].name} url={item.uri}/>) 
            }) 
            : null
          }
        </Row>
    </Container>
  );
}

export default TopTracks;
