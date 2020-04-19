const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        required: false
    },
    imgUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    createTime: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Product', ProductSchema)