const express = require('express'); 
const SpotifyWebApi = require('spotify-web-api-node');

const app = express(); 

app.post('/login', (req, res) => {
    code = req.body.code; 
    const spotifyApi = new SpotifyWebApi({
        redirectedUri: 'http://localhost:3000',
        clientId: 'ad7e228bcd104c29a7a8fe38e4603f09', 
        clientSecret: 'c2b2f3723998407da96ff7cf16ab84c7'
    })

    spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    })
    .catch(() => {
        res.sendStatus(400); 
    })
})

app.listen(8080, () => {console.log("Server started on port 8080")})