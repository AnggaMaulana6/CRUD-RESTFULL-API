require('dotenv').config();


const express = require('express');
const mongoose = require('mongoose');
const body = require('body-parser')
const mongoString = process.env.DATABASE_URL
const routes = require('./routes/routes.js');

const app = express();
app.use(body.json())
app.use('/api', routes)

// Menghubungkan database server dengan mongoose
mongoose.connect("mongodb+srv://Angga:ame123@cluster0.qcaudyi.mongodb.net/test");
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', ()=>{
    console.log('Database Connected');
})


app.use(express.json());

app.listen(3000, () => {
    console.log('Server Started at ${3000}')
})