const express = require("express")
const categoryRouter = express.Router()
require('../db/mongoose')
const Category = require('../db/category')
const ObjectId = require("mongodb").ObjectId


categoryRouter.route("/category/getAll").get(function (req, response) {
    Category.find({}).then((categories) => {
      response.status(200).send(categories)
    }).catch((e) => {
      response.status(418).send(e)
    })
  })
  
categoryRouter.route("/category/add").post(function (req, response) {
    let newCategory = new Category({
        name: req.body.name
        })

        newCategory.save().then(() => {
        response.status(201).send(newCategory)
    }).catch((e) => {
        response.status(418).send(e)
    })
})

module.exports = categoryRouter;
