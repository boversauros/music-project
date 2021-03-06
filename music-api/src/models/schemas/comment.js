const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const Comment = new Schema({
    text: {
        type: String,
        required: true
    },

    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    },

    targetId: {
        type: String,
        required: true
    },

    target: {
        type: String,
        required: true,
        enum: ['artist', 'album', 'track']
    }
})

module.exports = Comment