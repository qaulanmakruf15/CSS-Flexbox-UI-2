const Pool = require('pg-pool')

const myDatabase = new Pool({
    user : "qaulanmakruf",
    database : "foodItems",
    password : "",
    host : "localhost"
})

module.exports = myDatabase