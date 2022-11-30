const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./utils/database');
const handleError = require('./middlewares/error.middleware');
const initModels = require('./models/init.models');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

initModels();

//Authenticated DataBase
db.authenticate()
  .then(() => console.log('***!DataBase Authenticated!***'))
  .catch((err) => console.log(err));

//Synced DataBase
db.sync({ force: true })
  .then(() => console.log('***!DataBase Synced!***'))
  .catch((err) => console.log(err));


app.get('/', (req, res) => {
  console.log('! >- WELLCOME TO THE SERVER -> !')
});

app.use(handleError);

module.exports = app;