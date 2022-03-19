const mongoose = require('mongoose')
const validator = require('validator')


const Account = mongoose.model('UserAccount', {
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (value.length < 8) {
                throw new Error('Password needs to have at least 8 characters')
            }
        }
    }
    })


module.exports = Account;