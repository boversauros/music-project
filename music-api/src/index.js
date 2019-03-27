require('dotenv').config()

require('isomorphic-fetch')

const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const spotifyApi = require('./spotify-api')
const tokenHelper = require('./token-helper')
const { tokenVerifierMiddleware } = tokenHelper
const package = require('../package.json')
const cors = require('./cors')

const { registerUser, authenticateUser, retrieveUser, notFound, searchArtists, retrieveArtist, retrieveAlbums, retrieveAlbum, retrieveTracks, retrieveTrack, toggleFavouriteArtist, addCommentsToArtist, listCommentsFromArtist } = require('./routes')

const { env: { DB_URL, PORT, SPOTIFY_API_TOKEN, SECRET, CLIENT_ID, CLIENT_SECRET }, argv: [, , port = PORT || 8080] } = process


mongoose.connect(DB_URL, { useNewUrlParser: true })
    .then(() => {
        tokenHelper.jwtSecret = SECRET
        spotifyApi.token = SPOTIFY_API_TOKEN

        spotifyApi.CLIENT_ID = CLIENT_ID
        spotifyApi.CLIENT_SECRET = CLIENT_SECRET

        const app = express()

        const jsonBodyParser = bodyParser.json()

        const router = express.Router()

        router.use(cors)

        router.post('/user', jsonBodyParser, registerUser)

        router.post('/user/auth', jsonBodyParser, authenticateUser)

        router.get('/user', tokenVerifierMiddleware, retrieveUser)

        router.get('/artists', searchArtists)

        router.get('/artist', retrieveArtist)

        router.get('/artists/:artistId/albums', retrieveAlbums)

        router.get('/albums/:albumId', retrieveAlbum)

        router.get('/albums/:albumId/tracks', retrieveTracks)

        router.get('/tracks/:trackId', retrieveTrack)

        router.get('/user/favourite/artist', tokenVerifierMiddleware, toggleFavouriteArtist)

        router.post('/artist/:artistId/comment', [tokenVerifierMiddleware, jsonBodyParser], addCommentsToArtist)

        router.get('/artist/:artistId/comment', listCommentsFromArtist)

        router.get('*', notFound)

        app.use('/api', router)

        app.listen(port, () => console.log(`${package.name} ${package.version} running on port ${port}`))
    })
    .catch(console.error)


process.on('SIGINT', () => {
    mongoose.disconnect()
        .then(() => {
            console.log(`\n ${package.name} stopped`)

            process.exit(0)
        })
})
