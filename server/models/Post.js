const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    createTime: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Post', PostSchema)