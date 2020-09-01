const database = require("../config/Databases")
const Product = {}

Product.GetAll = () => {
    return new Promise((resolve, reject) => {
        database
            .query("SELECT * FROM product ORDER BY id ASC")
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

Product.Search = (name) => {
    return new Promise((resolve, reject) => {
        database
            .query(`SELECT * FROM product WHERE name LIKE '%${name}%'`)
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

Product.Create = (name, stock, price) => {
    database
        .query(`INSERT INTO product (name, stock, price) VALUES ('${name}', ${stock}, '${price}')`)
        .then((res) => {
            return "Insert data Success"
        })
        .catch((err) => {
            return err
        })
}

Product.Update = (id, name, stock, price) => {
    database
        .query(
            `UPDATE product SET name='${name}', stock=${stock}, price='${price}' WHERE id=${id};`)
        .then((res) => {
            console.log(res)
            return "Update data Success"
        })
        .catch((err) => {
            console.log(err)
            return err
        })
}

Product.Delete = (id) => {
    database
        .query(`DELETE FROM product WHERE id=${id};`)
        .then((res) => {
            return "Delete data Success"
        })
        .catch((err) => {
            return err
        })
}

module.exports = Product