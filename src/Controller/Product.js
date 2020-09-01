const model = require("../Model/Product")
const Product = {}

Product.all = async (req, res) => {
    try {
        const data = await model.GetAll()
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}

Product.create = async (req, res) => {
    try {
        const {name, stock, price} = req.body
        const data = model.Create(name, stock, price)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}

Product.update = async (req, res) => {
    const {id, name, stock, price} = req.body
    const data = model.Update(id, name, stock, price)
    return res.send(data)
}

Product.delete = async (req, res) => {
    const {id, name, stock, price} = req.body
    const data = model.Delete(id, name, stock, price)
    return res.send(data)
}

Product.search = async (req, res) => {
    try {
        const name = req.query.name
        const data = await model.Search(name)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = Product
