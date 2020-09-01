const database = require("../config/Databases")
const History = {}

History.GetAll = () => {
    return new Promise((resolve, reject) => {
        database
            .query("SELECT * FROM history")
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

History.Create = (invoice, cashier, date, orders, amount) => {
    database
        .query(`INSERT INTO history (invoice, cashier, date, orders, amount) VALUES ('${invoice}', ${cashier}, '${date}', '${orders}', '${amount}')`)
        .then((res) => {
            return "Insert data Success"
        })
        .catch((err) => {
            return err
        })
}

History.Update = (invoice, cashier, date, orders, amount) => {
    database
        .query(
            `UPDATE history SET cashier='${cashier}', date=${date}, price='${orders}', amount='${amount}' WHERE invoice=${invoice};`)
        .then((res) => {
            console.log(res)
            return "Update data Success"
        })
        .catch((err) => {
            console.log(err)
            return err
        })
}

History.Delete = (id) => {
    database
        .query(`DELETE FROM history WHERE invoice=${invoice};`)
        .then((res) => {
            return "Delete data Success"
        })
        .catch((err) => {
            return err
        })
}

module.exports = History