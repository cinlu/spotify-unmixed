import './Dashboard.css';
import axios from "axios"; 
import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';
import DashboardHeader from '../components/DashboardHeader';
import Recommendations from '../components/Recommendations';
import TopTracks from '../components/TopTracks';
import TopArtists from '../components/TopArtists';

function Dashboard() {
  const TOP_TRACKS_URL = "https://api.spotify.com/v1/me/top/tracks?limit=5"; 
  const TOP_ARTISTS_URL = "https://api.spotify.com/v1/me/top/artists?limit=5"; 
  const TOP_TRACK_URL = "https://api.spotify.com/v1/me/top/tracks?limit=1"; 
  const TOP_ARTIST_URL = "https://api.spotify.com/v1/me/top/artists?limit=1"; 


  const [token, setToken] = useState(""); 
  const [topTracks, setTopTracks] = useState({}); 
  const [topArtists, setTopArtists] = useState({}); 
  const [topTrack, setTopTrack] = useState({}); 
  const [topArtist, setTopArtist] = useState({}); 


  useEffect(() => {
    const hash = window.location.hash;
    // let token = window.localStorage.getItem("spotify_token"); 
    // if (t) {
    //   setToken(t); 
    // }

    if (hash) {
      let t = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]; 
      // let time = hash.substring(1).split("&").find(elem => elem.startsWith("expires_in")).split("=")[1]; 

      window.location.hash = ""; 
      window.localStorage.removeItem("spotify_token"); 
      // window.localStorage.removeItem("time"); 

      window.localStorage.setItem("spotify_token", t);
      // window.localStorage.setItem("expires_in", time);

      setToken(t); 

      axios.get(TOP_TRACKS_URL, {
        headers: {
          Authorization: "Bearer " + t, 
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
  }, [])

  // useEffect(() => {
  //   handleGetTopTracks(); 
  // }, [token])

  // const handleGetTopTracks = () => {
  //   console.log(token); 

  //   axios.get(TOP_TRACKS_URL, {
  //     headers: {
  //       Authorization: "Bearer " + token, 
  //     }, 
  //   })
  //   .then((response) => {
  //     console.log(response.data);
  //     setTopTracks(response.data); 
  //   })
  //   .catch((error) => {
  //     console.log(error); 
  //   })
  // }

  return (
    
    <div className='Dashboard'> 
      
      <DashboardHeader token={token}/>
      <Recommendations/>
      <TopTracks/>
      <TopArtists/>
    
      {
        topTracks.items ? topTracks.items.map((item) => {
          return <p> {item.name} </p> }) : null
      }
      <Footer/>
    </div>
  );
}

export default Dashboard;
