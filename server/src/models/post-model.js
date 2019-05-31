const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Tag = require('./tag-model')

const PostSchema = new Schema({
    title: {
        type: String,
        unique: true
    },
    description: {
        type: String
    },
    tag_id: {
        type: String
    },
    tag: {
        type: Object,
        default: {}
    }
});

//PostSchema.methods.testme = () => {
//    return "Testme function return";
//}

PostSchema.methods.findTag = (tag_id, callback) => {
    return Tag.findById( tag_id, "title", callback);
}

const PostModel = mongoose.model('posts', PostSchema)

module.exports = PostModel