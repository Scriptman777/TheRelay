const express = require("express")
const bcrypt = require('bcrypt')
const saltRounds = 10
const accountRouter = express.Router()
require('../db/mongoose')
const Account = require('../db/account')
auth = require("../authMiddleware")


accountRouter.route("/account/add").post(function (req, response) {
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {

    let newAccount = new Account({
      username: req.body.username,
      email: req.body.email,
      password: hash 
      })

      Account.findOne({email: newAccount.email}).then((exists) => {
        if (exists) { 
          response.status(400).send({message: "Entered e-mail already in use"})
        }
        else {
          newAccount.save().then(() => {
            response.status(201).send(newAccount)
          }).catch((e) => {
            response.status(500).send(e)
          })
        }
      })
    })
  })

accountRouter.route("/account/login").post(function (req, response) {
  Account.findOne({username: req.body.username}).then((account) => {
      let check = bcrypt.compareSync(req.body.password, account.password)
      if (check)
      {
        account.generateAuthToken().then((token) => {
          response.status(200).send({token: token})
        })
      }
      else
      {
        response.status(403).send({message: "Incorrect username or password"})
      }
  }).catch((e) => {
    response.status(404).send({message: "User could not be found"})
  })
})

accountRouter.route("/account/logout").get(auth, function (req, response) {
  Account.findOne({_id: req.user}).then((account) => {
     account.tokens = []
     account.save().then(response.status(200).send({message: "User logged out"}))
  }).catch((e) => {
    response.status(404).send(e)
  })
})

accountRouter.route("/account/getAll").get(function (req, response) {
  Account.find({}).then((accounts) => {
    response.status(200).send(accounts)
  }).catch((e) => {
    response.status(404).send(e)
  })
})

accountRouter.route("/account/getByID").get(function (req, response) {
  Account.find({_id: req.body.id}).then((account) => {
    response.status(200).send(account)
  }).catch((e) => {
    response.status(404).send(e)
  })
})

accountRouter.route("/account/me").get(auth, function (req, response) {
  response.send(req.user)
})


module.exports = accountRouter;