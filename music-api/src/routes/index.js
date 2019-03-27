module.exports = {
    registerUser: require('./register-user'),

    authenticateUser: require('./authenticate-user'),

    retrieveUser: require('./retrieve-user'),

    notFound: require('./not-found'),

    searchArtists: require('./search-artists'),

    retrieveArtist: require('./retrieve-artist'),

    retrieveAlbums: require('./retrieve-albums'),

    retrieveAlbum: require('./retrieve-album'),

    retrieveTracks: require('./retrieve-tracks'),

    retrieveTrack: require('./retrieve-track'),

    addCommentsToArtist: require('./add-comment-to-artist'),

    listCommentsFromArtist: require('./list-comments-from-artist'),

    toggleFavouriteArtist: require('./toggle-favourite-artists')
}