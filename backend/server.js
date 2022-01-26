const express = require('express')
const mysql = require('mysql')
const cors= require('cors')

const app =express();

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3001

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'nodejs-login'
})
 
app.post('/editAd', (req,res)=>{
    const {passward, email} = req.body;

    db.query(
        `UPDATE user SET passward='${passward}' WHERE email='${email}'`,
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.post('/res', (req, res) => {
    const {name, lastname, email, passward, phone} = req.body

    db.query(`INSERT INTO user (name, lastname, email, passward, phone) VALUES (?,?,?,?,?)`,
    [name, lastname, email, passward, phone],
    (err, result) => {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.status(200).json('Successfully');
        }
    }
)})


app.post('/login', (req, res) => {
    const {email, passward} = req.body
    db.query(`SELECT * FROM user WHERE email='${email}' AND passward = '${passward}'`,
    (err, result) => {
        if (result.length === 0) {
            res.status(400).json('not login ');
        }
        else {
            res.status(200).json('Login');
        }
    })
})



app.listen(PORT, () => {
    console.log(`sever run on ${PORT}`);
})





