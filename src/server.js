const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

require('dotenv').config();

const routes = require('./routes');

const app = express();


const db_username = process.env.DB_USER;
const db_password = process.env.DB_PASS;
const db_name = process.env.DB_NAME
const URI = 'mongodb+srv://' + db_username + ':' + db_password + '@estudos.xuntv.mongodb.net/' + db_name + '?retryWrites=true&w=majority';
//const URI = 'mongodb+srv://process.env.DB_USER:process.env.DB_PASS@estudos.xuntv.mongodb.net/Estudos?retryWrites=true&w=majority';



mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(db => console.log("Conectado com sucesso ao banco de dados."))
  .catch(err => console.log(">> ERROR: ",err));



app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);
app.listen(3333);

module.exports = routes;