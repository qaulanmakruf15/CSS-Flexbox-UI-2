const model = require("../Model/Category")
const Category = {}

Category.all = async (req, res) => {
    try {
        const data = await model.GetAll()
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}

Category.create = async (req, res) => {
    const {name} = req.body
    const data = model.Create(name)
    return res.send(data)
}


Category.update = async (req, res) => {
    const {id, name} = req.body
    const data = model.Update(id, name)
    return res.send(data)
}

Category.delete = async (req, res) => {
    try {
        const data = await model.Delete(id)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}

Category.search = async (req, res) => {
    try {
        const name = await model.Search(name)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = Category
