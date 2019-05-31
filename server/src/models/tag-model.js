const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Post = require('./post-model');

const TagSchema = new Schema({
    title: {
        type: String,
        unique: true
    },
})

TagSchema.methods.hello = () => {
    return "Tag hello";
}

const TagModel = mongoose.model('tags', TagSchema)

module.exports = TagModel