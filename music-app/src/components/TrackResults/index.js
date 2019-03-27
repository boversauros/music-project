import React, { useState, useEffect } from 'react'
import logic from '../../logic'

function TrackResults({ albumId, onTrackDetail }) {
    const [album, setAlbum] = useState(null)
    const [tracks, setTracks] = useState(null)


    useEffect(() => {
        try {
            logic.retrieveAlbum(albumId)
                .then(album => setAlbum(album))
                .catch(err => console.log('async err', err))
        } catch (error) {
            console.log('error', error)
        }

        try {
            logic.retrieveTracks(albumId)
                .then(tracks => setTracks(tracks))
                .catch(err => console.log('async err', err))
        } catch (error) {
            console.log('error', error)
        }

    }, [albumId])


    function handleClickTrack(event, trackId){
        event.preventDefault()

        onTrackDetail(trackId)
    }

    return (<section>
        <div className="columns is-multiline is-mobile is-centered">
            <div className="column is-three-quarters-mobile is-three-quarters-tablet is-one-fifth-desktop has-text-centered">
                <div className="block">
                    <img src={album && album.images.length > 0 ? album.images[0].url : 'https://yt3.ggpht.com/a-/AAuE7mDajKsKk93LF27roj83w1ixbeMNG_Wk_EjZoA=s900-mo-c-c0xffffffff-rj-k-no'} alt={album ? album.name : 'album image'} />
                    <h2>{album ? album.name : 'Album Name'}</h2>
                </div>
            </div>
            {tracks && <div className="column is-three-quarters-mobile is-three-quarters-tablet is-four-fifth-desktop">
                <div className="block">
                    <nav className="panel">
                        {tracks.length > 0 ? tracks.map(track => <a className="panel-block" key={track.id} onClick={e => handleClickTrack(e, track.id)} href="#">
                            <span className="panel-icon"><i className="fab fa-itunes-note" aria-hidden="true"></i></span>
                            {track.name}
                        </a>) : <p></p>}
                    </nav>
                </div>
            </div>}
        </div>
    </section>)
}

export default TrackResults