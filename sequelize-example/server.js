const express = require("express");
const bodyParser = require("body-parser");
const users = require('./api/users');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/api/users', users);

app.listen(4000, () => console.log("Servidor corriendo en localhost:4000"));