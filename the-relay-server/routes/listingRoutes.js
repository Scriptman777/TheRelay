const express = require("express")
const listingRouter = express.Router()
require('../db/mongoose')
const Listing = require('../db/listing')
const Category = require('../db/category')
const ObjectId = require("mongodb").ObjectId


listingRouter.route("/listing/getAll").get(function (req, response) {
    Listing.find({}).then((listings) => {
      response.status(200).send(listings)
    }).catch((e) => {
      response.status(404).send(e)
    })
})

listingRouter.route("/listing/add").post(function (req, response) {
    let newListing = new Listing({
      userID: req.body.userID,
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      price: req.body.price
      })

    newListing.save().then(() => {
      response.status(201).send(newListing)
    }).catch((e) => {
      response.status(418).send(e)
    })
  })
  

module.exports = listingRouter;