const model = require("../Model/History")
const History = {}

History.all = async (req, res) => {
    try {
        const data = await model.GetAll()
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}

History.create = async (req, res) => {
    const {invoice, cashier, date, orders, amount} = req.body
    const data = model.Add(invoice, cashier, date, orders, amount)
    return res.send(data)
}


History.update = async (req, res) => {
    const {invoice, cashier, date, orders, amount} = req.body
    const data = model.Edit(invoice, cashier, date, orders, amount)
    return res.send(data)
}

History.delete = async (req, res) => {
    try {
        const data = await model.Delete(id)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}

History.search = async (req, res) => {
    try {
        const name = await model.Search(name)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = History
