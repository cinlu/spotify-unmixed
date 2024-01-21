import axios from "axios"; 
import { Container, Row } from 'react-bootstrap';
import SingleItem from '../components/SingleItem';
import { useState, useEffect } from 'react';


function Recommendations({token}) {
  const TOP_TRACKS_URL = "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=3"; 
  const [recommendations, setRecommendations] = useState({}); 

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
      let seeds = ""; 

      response.data.items.map((item) => {
        seeds = seeds + item.id + ","; 
        // console.log(item.id); 
      })

      seeds = seeds.substring(0, seeds.length - 1); 
      // console.log(seeds); 

      const RECOMMENDATIONS_URL = "https://api.spotify.com/v1/recommendations?limit=5&market=US&seed_tracks=" + seeds; 

      handleGetRecommendations(RECOMMENDATIONS_URL); 

    })
    .catch((error) => {
      console.log(error); 
    })
  }

  const handleGetRecommendations = (RECOMENNDATIONS_URL) => {
    axios.get(RECOMENNDATIONS_URL, {
      headers: {
        Authorization: "Bearer " + token, 
      }, 
    })
    .then((response) => {
      console.log(response.data);
      setRecommendations(response.data); 
    })
    .catch((error) => {
      console.log(error); 
    })
  }

  return (
    <Container>
        <h5> Based on Your Recent Favorites </h5>
        <p className='subheading'>We think you should give these a listen...</p>
        <Row className='row'>
          {
          recommendations.tracks ? recommendations.tracks.map((item) => {
            return <SingleItem key={item.id} image={item.album.images[1].url} name={item.name} details={item.artists[0].name} url={item.uri}/> }) : null
          }
        </Row>
    </Container>
  );
}

export default Recommendations;
