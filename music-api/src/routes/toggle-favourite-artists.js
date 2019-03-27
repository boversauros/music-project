const logic = require('../logic')

module.exports = (req, res) => {

    const { query: { artistId }, userId } = req

    try {
        logic.toggleFavoriteArtist(userId, artistId)
            .then(isFavourite => res.json({ isFavourite }))
            .catch(({ message }) => {
                res.status(401).json({
                    error: message
                })
            })
    } catch ({ message }) {
        res.status(401).json({
            error: message
        })
    }
}