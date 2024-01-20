import { useEffect, useState } from 'react';
import './Dashboard.Header.css';
import { Container } from 'react-bootstrap';
import axios from "axios"; 


function DashboardHeader( {token} ) {
    const USER_PROFILE_URL = "https://api.spotify.com/v1/me"; 
    const [userName, setUserName] = useState(""); 
    const [timeOfDay, setTimeOfDay] = useState(""); 

 
    useEffect(() => {
        const date = new Date(); 
        const time = date.getHours(); 

        if (time >= 5 && time < 12) {
            setTimeOfDay("Morning"); 
        } else if (time >= 12 && time < 18) {
            setTimeOfDay("Afternoon"); 
        } else {
            setTimeOfDay("Evening"); 
        }

        axios.get(USER_PROFILE_URL, {
            headers: {
              Authorization: "Bearer " + token, 
            }, 
          })
          .then((response) => {
            let name = response.data.display_name[0].toUpperCase() + response.data.display_name.slice(1); 
            setUserName(name); 
          })
          .catch((error) => {
            console.log(error); 
          })
    })

  return (      
    <Container className='header-container'>
      <h1 className='greeting'> Good {timeOfDay}, {userName} </h1>
      <p className='app-description'> 
      Welcome to <span className='app-name'> Spotify Unmixed</span>, a cool app where you can get insights 
      on your top listens and recommendations based on your favorite songs. Check out my other apps at 
      my online <a href='https://google.com'> portfolio </a>.
      </p>
    </Container>
    
  );
}

export default DashboardHeader;
