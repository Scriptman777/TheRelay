const express = require("express")
const listingRouter = express.Router()
require('../db/mongoose')
const Listing = require('../db/listing')
const Category = require('../db/category')
const ObjectId = require("mongodb").ObjectId
auth = require("../authMiddleware")


listingRouter.route("/listing/getAllSell").get(function (req, response) {
    Listing.find({isSale: true}).populate('user').then((listings) => {
      response.status(200).send(listings)
    }).catch((e) => {
      console.log(e)
      response.status(404).send(e)
    })
})

listingRouter.route("/listing/getAllBuy").get(function (req, response) {
    Listing.find({isSale: false}).populate('user').then((listings) => {
      response.status(200).send(listings)
    }).catch((e) => {
      console.log(e)
      response.status(404).send(e)
    })
})

listingRouter.route("/listing/add").post(auth, function (req, response) {
    let newListing = new Listing({
      user: req.user,
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      isSale: req.body.isSale,
      price: req.body.price
      })

    newListing.save().then(() => {
      response.status(201).send(newListing)
    }).catch((e) => {
      response.status(418).send(e)
    })
  })
  

module.exports = listingRouter;