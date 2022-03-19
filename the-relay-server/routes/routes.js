const express = require("express")
const router = express.Router()
require('../db/mongoose')
const Account = require('../db/account')
const Listing = require('../db/listing')
const ObjectId = require("mongodb").ObjectId

router.route("/account/add").post(function (req, response) {
    let newAccount = new Account({
      username: req.body.username,
      password: req.body.password
      })

    newAccount.save()

  })


module.exports = router;