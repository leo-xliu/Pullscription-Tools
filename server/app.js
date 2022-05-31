const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const connection = require('./projectdb');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//create
app.post('/insert', (req, res)=>{
});

//read
app.get('/inventory', (req, res)=>{
    connection.query("SELECT * FROM products", (err, result) => {
        if (err) throw err;
        res.json(result);
    })
})

app.listen(process.env.PORT,()=> console.log("app is running"))