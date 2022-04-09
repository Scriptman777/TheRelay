const mongoose = require('mongoose')
const validator = require('validator')

// Schema for a listing
const listingSchema = new mongoose.Schema({
    // Listings are created by users
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
    // Listing can be for sale or looking to purchase
    isSale: {
        type: Boolean,
        required: true,
    },
    // Price cannot be negative, but could be 0 for giveaways
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
        // Virtuals should appear in JSON form
        toJSON: {virtuals: true}
    })


const Listing = mongoose.model('Listing', listingSchema)


module.exports = Listing;