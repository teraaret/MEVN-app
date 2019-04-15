const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TagSchema = new Schema({
    title: {
        type: String,
        unique: true
    },
})

const TagModel = mongoose.model('tags', TagSchema)

module.exports = TagModel