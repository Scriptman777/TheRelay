const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')

// Mongoose Schema for account
const accountSchema =  new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Enter a valid e-mail!')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    // Login tokens
    tokens: [{
        token: {
        type: String,
        required: true
        }
        }]
    })

// Add method do generate token
accountSchema.methods.generateAuthToken = async function () {
    const account = this
    const token = jwt.sign({ _id: account._id.toString() }, 'CorrectH0rseBatteryStap1e')
    account.tokens = account.tokens.concat({ token })
    await account.save()
    return token
    }

accountSchema.methods.logout = async function () {
    const account = this
    account.tokens = []
    await account.save()
    }
    
// Add ref to listings
accountSchema.virtual('listings', {
    ref: 'Listing',
    localField: '_id',
    foreignField: 'user'
    })

// Create model
const Account = mongoose.model('UserAccount', accountSchema)


module.exports = Account;