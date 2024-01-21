import './Dashboard.css';
import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import DashboardHeader from '../components/DashboardHeader';
import Recommendations from '../components/Recommendations';
import TopTracks from '../components/TopTracks';
import TopArtists from '../components/TopArtists';

function Dashboard() {
  const TOP_ARTISTS_URL = "https://api.spotify.com/v1/me/top/artists?limit=5"; 
  const TOP_TRACK_URL = "https://api.spotify.com/v1/me/top/tracks?limit=1"; 
  const TOP_ARTIST_URL = "https://api.spotify.com/v1/me/top/artists?limit=1"; 


  const [token, setToken] = useState(""); 
  // const [topTracks, setTopTracks] = useState({}); 
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
    }   
  }, [])

  return (
    <div className='Dashboard'> 
      <DashboardHeader className="container" token={token}/>
      <Recommendations className="container" />
      <TopTracks className="container" token={token}/>
      <TopArtists className="container" />
      <Footer/>
    </div>
  );
}

export default Dashboard;
