import React, { useEffect, useState } from 'react'
import logic from '../../logic'

function AlbumResults({ artistId, onTracks }) {
    const [albums, setAlbums] = useState(null)

    useEffect(() => {
        try {
            logic.retrieveAlbums(artistId)
                .then(albums => setAlbums(albums))
                .catch(err => console.log('async err', err))
        } catch (error) {
            console.log('error', error)
        }

    }, [artistId])

    function handleClickTracks(event, albumId){
        event.preventDefault()
        onTracks(albumId)
    }

    return (<section>
        <div className="columns is-multiline is-mobile is-centered">
            {albums && albums.map(album => <div className="column is-three-quarters-mobile is-two-fifths-tablet is-one-fifth-desktop has-text-centered">
                <div className="block">
                    <img src={album.images.length > 0 ? album.images[0].url : "https://media.idownloadblog.com/wp-content/uploads/2016/10/latest.jpg"} alt="name" />
                    <a href="#" onClick={e => handleClickTracks(e, album.id)} ><h2>{album.name}</h2></a>
                </div>
            </div>)}
        </div>
    </section>)
}

export default AlbumResults