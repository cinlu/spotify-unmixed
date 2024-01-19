import { useState, useEffect } from "react";
import { Container } from "react-bootstrap"; 
import './Login.css';
import Footer from "../components/Footer.js"


// const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=ad7e228bcd104c29a7a8fe38e4603f09&response_type=code&redirect_uri=http://localhost:3000&scope=user-top-read"
const CLIENT_ID = "ad7e228bcd104c29a7a8fe38e4603f09"; 
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"; 
const REDIRECT_URI = "http://localhost:3000/dashboard"; 
const SPACE_DELIMITER = "%20";
const SCOPES = ["user-top-read", "user-read-private" ]; 
const SCOPES_PARAM = SCOPES.join(SPACE_DELIMITER); 

function Login() {
  
  // const [token, setToken] = useState(""); 

  // useEffect(() => {
  //   const hash = window.location.hash;
  //   let token = window.localStorage.getItem("spotify_token"); 
    
  //   if (!token && hash) {
  //     token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]; 
  //     window.location.hash = ""; 
  //     window.localStorage.setItem("spotify_token", token);
  //     setToken(token); 
  //   }

  // }, [])

  const handleLogin = () => {
    window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES_PARAM}&response_type=token&show_dialog=true`;
  };

  // const handleLogout = () => {
  //   setToken(""); 
  //   window.localStorage.removeItem("spotify_token");
  // }

  return (
    <div className="Login" >
      <Container className="login-container"> 
        <h1> Welcome to <span className="app-name"> SPOTIFY UNMIXED</span></h1>
        <img className="login-img" src={require('../images/music-player-cover.png')} alt="spotify music player cover" />
        <button className="btn btn-success btn-lg" onClick={handleLogin}> Login with Spotify </button>
        {/* <a className="btn btn-success btn-lg" href={AUTH_URL}> Login with Spotify </a> */}
      </Container>
      <Footer/>
    </div>
  );
}

export default Login;
