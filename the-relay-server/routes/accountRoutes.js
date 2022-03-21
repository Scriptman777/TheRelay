const express = require("express")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const saltRounds = 10
const accountRouter = express.Router()
require('../db/mongoose')
const Account = require('../db/account')
const ObjectId = require("mongodb").ObjectId


accountRouter.route("/account/add").post(function (req, response) {
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    let newAccount = new Account({
      username: req.body.username,
      password: hash 
      })
      
      newAccount.save().then(() => {
        response.status(201).send(newAccount)
      }).catch((e) => {
        response.status(418).send(e)
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
        response.status(403).send({error: "Wrong password"})
      }
  }).catch((e) => {
    response.status(404).send(e)
  })
})

accountRouter.route("/account/logout").post(function (req, response) {
  Account.findOne({username: req.body.username}).then((account) => {
     response.status(200).send({status: "User logged out"})
  }).catch((e) => {
    response.status(404).send(e)
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