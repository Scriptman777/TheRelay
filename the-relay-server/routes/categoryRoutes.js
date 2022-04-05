const express = require("express")
const categoryRouter = express.Router()
require('../db/mongoose')
const Category = require('../db/category')
const ObjectId = require("mongodb").ObjectId


categoryRouter.route("/category/getAll").get(function (req, response) {
    Category.find({}).then((categories) => {
      response.status(200).send(categories)
    }).catch((e) => {
      response.status(500).send(e)
    })
  })
  
module.exports = categoryRouter;
