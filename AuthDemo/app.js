const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const localStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const User = require('./models/user');
mongoose.connect("mongodb://localhost:27017/TWDB", { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/secret', (req, res) => {
    res.render('secret');
})

app.listen(3567, () => {
    console.log('server started......');
})