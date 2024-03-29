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
app.post('/create', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    connection.query("INSERT INTO admindb (un, pw) VALUES (?,?)",
    [username, password],
    (err, result) => {
        if (err) {
            throw (err);
        }
        res.send("Created Admin");
    }
    )
});

app.post('/admin', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    connection.query("SELECT * FROM admindb WHERE un = ? AND pw = ?",
    [username, password],
    (err, result)=>{
        if (err) {
            throw (err);
        } else if (result.length > 0) {
            res.send("Welcome")
        }
    })
});

//read
app.get('/create', (req, res)=>{
    connection.query("SELECT * FROM admindb", (err, result) => {
        if (err) throw err;
        res.json(result);
    })
})

app.get('/inventory', (req, res)=>{
    connection.query("SELECT * FROM products", (err, result) => {
        if (err) throw err;
        res.json(result);
    })
})

//update

//delete
app.delete('/delete:id', (req, res)=>{
    const id = req.params.id;
    connection.query("DELETE FROM admindb WHERE un = ?", 
    id,
    (err, result)=>{
        if (err) {
            throw (err);
        }
        res.send("Deleted " + id)
        console.log(id)
    })
})

app.listen(process.env.PORT,()=> console.log("app is running"))