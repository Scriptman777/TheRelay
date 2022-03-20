const express = require("express")
const accountRouter = express.Router()
require('../db/mongoose')
const Account = require('../db/account')
const ObjectId = require("mongodb").ObjectId


accountRouter.route("/account/add").post(function (req, response) {
    let newAccount = new Account({
      username: req.body.username,
      password: req.body.password
      })

    newAccount.save().then(() => {
      response.status(201).send(newAccount)
    }).catch((e) => {
      response.status(418).send(e)
    })
  })

accountRouter.route("/account/getAll").get(function (req, response) {
  Account.find({}).then((accounts) => {
    response.status(200).send(accounts)
  }).catch((e) => {
    response.status(418).send(e)
  })
})

accountRouter.route("/account/getByID").get(function (req, response) {
  Account.find({_id: req.body.id}).then((account) => {
    response.status(200).send(account)
  }).catch((e) => {
    response.status(404).send(e)
  })
})


module.exports = accountRouter;