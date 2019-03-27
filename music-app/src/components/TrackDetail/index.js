import React, { useEffect, useState } from 'react'
import logic from '../../logic'
import './index.sass'

function TrackDetail({ trackId }) {
    const [track, setTrack] = useState(null)

    useEffect(() => {

        try {
            logic.retrieveTrack(trackId)
                .then(track => setTrack(track))
                .catch(err => console.log('err async',err))
        } catch (error) {
            console.log('sync error', error)
        }

    }, [trackId])


    return (<section>
        <div className="columns is-multiline is-mobile is-centered">
            {track && <div className="column is-three-quarters-mobile is-three-quarters-tablet is-three-quarters-desktop has-text-centered">
                <div className="track--detail">
                    {/* {track.preview_url && <audio controls="">
                        <source src={track.preview_url} type="audio/mpeg" />
                    </audio>} */}
                    <img className="track--image" src="https://media.idownloadblog.com/wp-content/uploads/2016/10/latest.jpg" alt="name" />
                    <h2 className="title">{track ? track.name : 'track name'}</h2>
                    <h4>{track ? track.artists[0].name : 'artist name'}</h4>
                    <a href="#" className="button track--button" target="_blank"><i className="fab fa-spotify"></i> Spotify Page</a>
                    <br />
                    <audio controls="" autoplay="" name="media">
                        <source src="https://p.scdn.co/mp3-preview/5995cbc458c74a9f4beb50ca250a9920d3b1d8ab?cid=774b29d4f13844c495f206cafdad9c86" type="audio/mpeg" />
                    </audio>
                </div>
            </div>}
        </div>
    </section>)
}

export default TrackDetail