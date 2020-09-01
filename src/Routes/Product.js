const express = require("express")
const controller = require("../Controller/Product")
const Route = express.Router()

Route.get("/", controller.all)
Route.post("/", controller.create)
Route.put("/", controller.update)
Route.delete("/", controller.delete)
Route.get("/search", controller.search)

module.exports = Route
