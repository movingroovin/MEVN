const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bday: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    mobilephone: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    createTime: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', UserSchema)