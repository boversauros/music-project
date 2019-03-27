import React, { useState, useEffect } from 'react'
import Feedback from '../Feedback'
import logic from '../../logic'
import './index.sass'

function ArtistResults({query, onAlbums}) {
    const [feedback, setFeedback] = useState('')
    const [artists, setArtists] = useState(null)

    useEffect(() => {
        if (query) {
            try {
                logic.searchArtists(query)
                    .then(result => {
                        if (result.length == 0) {
                            setArtists('')
                            setFeedback(`There are no results for query: ${query}`)
                        } else {
                            setFeedback(null)
                            setArtists(result)
                        }
                    })
                    .catch(error => setFeedback(error.message))
            } catch (error) {
                setFeedback(error.message)
            }
        }

    }, [query]);


    function handleCardClick(event, artistId) {
        event.preventDefault()

        onAlbums(artistId)
    }

    return (<section>
        <div className="columns is-multiline is-mobile is-centered">
            {artists && artists.map(artist => <div className="column is-three-quarters-mobile is-two-fifths-tablet is-one-third-desktop">
                <div onClick={event => handleCardClick(event, artist.id)} className="card artist-card is-shady">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img className="modal-button" src={artist.images.length > 0 ? `${artist.images[0].url}` : 'https://image.freepik.com/free-vector/circle-made-music-instruments_23-2147509304.jpg?2'} alt="name" />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <h4>{artist.name}</h4>
                            <progress className="progress" value={artist.popularity} max="100">{artist.popularity}%</progress>
                            {artist.genres.length > 0 && <div className="tags">
                                {artist.genres.map(genre => <span className="tag">{genre}</span>)}
                            </div>}
                        </div>
                    </div>
                </div>
            </div>)}
            {feedback && <Feedback message={feedback} />}
        </div>
    </section>)
}

export default ArtistResults