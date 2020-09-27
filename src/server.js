const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const routes = require('./routes');

const app = express();


const db_username = process.env.DB_USER;
const db_password = process.env.DB_PASS;
console.log(db_password); //Checking env -> Remove after dev
const URI = 'mongodb+srv://' + db_username + ':' + db_password + '@estudos.xuntv.mongodb.net/Estudos?retryWrites=true&w=majority';
//console.log(process.env.DB_PASS);
//const URI = 'mongodb+srv://process.env.DB_USER:process.env.DB_PASS@estudos.xuntv.mongodb.net/Estudos?retryWrites=true&w=majority';



mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(db => console.log("Conectado com sucesso"))
  .catch(err => console.log(">> ERROR: ",err));

app.use(express.json());
app.use(routes);
app.listen(3333);