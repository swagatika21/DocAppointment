const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password:"postswag",
    host:"localhost",
    port:5432,
    database: "doctoken"

});

module.exports =pool;