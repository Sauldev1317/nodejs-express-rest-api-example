const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 

app.use(require('./routes/usuarios'));

mongoose.connect('mongodb://localhost:27017/cafe', {useNewUrlParser: true, useUnifiedTopology: true});

app.listen(3000, () => {
    console.log('Escuchando puerto 3000');
})