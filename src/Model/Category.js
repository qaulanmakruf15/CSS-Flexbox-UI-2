const database = require("../config/Databases")
const Category = {}

Category.GetAll = () => {
    return new Promise((resolve, reject) => {
        database
            .query("SELECT * FROM category ORDER BY id ASC")
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}


Category.Create = (name) => {
    database
        .query(`INSERT INTO category (name) VALUES ('${name}'')`)
        .then((res) => {
            return "Insert data Success"
        })
        .catch((err) => {
            return err
        })
}

Category.Update = (id, name) => {
    database
        .query(
            `UPDATE category SET name='${name}' WHERE id=${id};`)
        .then((res) => {
            console.log(res)
            return "Update data Success"
        })
        .catch((err) => {
            console.log(err)
            return err
        })
}

Category.Delete = (id) => {
    database
        .query(`DELETE FROM category WHERE id=${id};`)
        .then((res) => {
            return "Delete data Success"
        })
        .catch((err) => {
            return err
        })
}

module.exports = Category