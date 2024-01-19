import './Dashboard.css';
import { useState, useEffect } from 'react';

function Dashboard({token, setToken}) {

  // const [token, setToken] = useState(""); 

  useEffect(() => {
    const hash = window.location.hash;
    // let token = window.localStorage.getItem("spotify_token"); 
    // if (t) {
    //   setToken(t); 
    // }
    if (!token && hash) {
      let t = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]; 
      window.location.hash = ""; 
      window.localStorage.removeItem("spotify_token"); 
      window.localStorage.setItem("spotify_token", t);
      setToken(t); 
      console.log(token); 
    }
    
  }, [])


  return (
    <div> 
      <p> dashboard!! </p>
      <p> {token} </p>
    </div>
  );
}

export default Dashboard;
