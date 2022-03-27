const mongoose = require('mongoose')
const validator = require('validator')


const listingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'UserAccount'
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
    category: {
        type: String,
        required: true,
        trim: true
    },
    isSale: {
        type: Boolean,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
        validate(value) {
            if (value < 0) {
                throw new Error('Price cannot be negative')
            }
        }
    }
    },
    {
        toJSON: {virtuals: true}
    })


const Listing = mongoose.model('Listing', listingSchema)


module.exports = Listing;