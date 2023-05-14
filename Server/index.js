const express = require('express');
const app = express();
const cors=require('cors');
// const pool = require('./db')
const { Pool } = require("pg");
//middleware
app.use(cors());
app.use(express.json());

const pool = new Pool({
    user:"postgres",
    password:"postswag",
    host:"localhost",
    port:5432,
    database: "doctoken"

});


//Routes

//Create a row
app.post('/tokens', async(req, res)=>{
 try {
    const { name, phoneNumber,token_type } = req.body;
    const query = await pool.query(
        'INSERT INTO token (name, phoneNumber,token_type) VALUES ($1, $2,$3) RETURNING *',
    [name, phoneNumber,token_type]

    );
    res.json(query.rows[0]);

 } catch (err) {
    console.error(err.message);

 }
});
//get all tokens
app.get("/tokens",async(req,res)=>{
    try {
        const alltokens = await pool.query("SELECT * FROM token")
        res.json(alltokens.rows);

    } catch (error) {
        console.log(error.message);
    }
})
//get a token
app.get("/tokens/:id",async(req,res)=>{
    try {
     const {id}  = req.params;
     const tokens = await pool.query("SELECT * FROM token where token_id =$1",[id])

      res.json(tokens.rows[0]);

    } catch (error) {
        console.log(error.message);
    }
})


app.listen(5000,()=>{
    console.log('listening on port 5000')
});
