const express = require("express")
const product = require('./Routes/Product')
const category = require('./Routes/Category')
const history = require('./Routes/History')

const Routes = express.Router()

Routes.use("/product", product)
Routes.use("/category", category)
Routes.use("/history", history)

module.exports = Routes

