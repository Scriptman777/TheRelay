const jwt = require('jsonwebtoken')
const Account = require('./db/account')

// JWT-based Authorization for some routes
const auth = async (req, response, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'CorrectH0rseBatteryStap1e')
        const userAccount = await Account.findOne({ _id: decoded._id, 'tokens.token': token })
        if (!userAccount) {
            throw new Error()
    }
    req.token = token
    req.user = userAccount
    next()
    } catch (e) {
        response.status(401).send({ error: 'Invalid auth token' })
    }
}

module.exports = auth
