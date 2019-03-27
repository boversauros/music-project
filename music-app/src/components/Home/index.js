import React, { Fragment, useState } from 'react'
import { Route } from 'react-router-dom'
import Header from '../Header'
import Navigation from '../Navigation'
import Search from '../Search'
import ArtistResults from '../ArtistResults'
import AlbumResults from '../AlbumResults'
import TrackResults from '../TrackResults'
import TrackDetail from '../TrackDetail'
import Footer from '../Footer'

function Home(props) {

    //search artists
    function onSearch(query) {
        props.history.push(`/home/search/${query}`)
    }

    //retrieve albums from artist
    function retrieveAlbums(artistId) {
        props.history.push(`/home/albums/${artistId}`)
    }

    //retrieve tracks from album
    function retrieveTracks(albumId) {
        props.history.push(`/home/album/${albumId}`)
    }

    //retrieve track detail
    function retrieveTrack(trackId) {
        props.history.push(`/home/track/${trackId}`)
    }

    return (<Fragment>
        <Navigation />
        <section className="container">
            <section className="section">
                <Search onSearch={onSearch} />
                <Route path="/home/search/:query" render={props => <ArtistResults query={props.match.params.query} onAlbums={retrieveAlbums} />} />
                <Route path="/home/albums/:artistId" render={props => <AlbumResults artistId={props.match.params.artistId} onTracks={retrieveTracks} />} />
                <Route path="/home/album/:albumId" render={props => <TrackResults albumId={props.match.params.albumId} onTrackDetail={retrieveTrack} />} />
                <Route path="/home/track/:trackId" render={props => <TrackDetail trackId={props.match.params.trackId} />} />
            </section>
        </section>
        <Footer />
    </Fragment>)

}

export default Home