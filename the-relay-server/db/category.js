const mongoose = require('mongoose')

// Simple category - only carries name, could be expanded later
const Category = mongoose.model('Category', {
    name: {
        type: String,
        required: true,
        trim: true
    }
    })


module.exports = Category;