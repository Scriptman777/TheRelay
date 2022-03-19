const mongoose = require('mongoose')
const validator = require('validator')


const Listing = mongoose.model('Listing', {
    userID: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true,
        validate(value) {
            if (value > 0) {
                throw new Error('Price must be higher than 0')
            }
        }
    },
    })


module.exports = Listing;