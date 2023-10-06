const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
const mydb = require('./db')
require('dotenv').config();


app.use(express.json())
app.use(cors())

mydb.myDb();

app.listen(4000, () => {
    console.log("Server is running on port 4000")
})



