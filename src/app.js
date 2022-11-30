const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./utils/database');
const handleError = require('./middlewares/error.middleware');
const initModels = require('./models/init.models');
const { userRoutes, authRoutes } = require('./routes');

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
db.sync({ force: false })
  .then(() => console.log('***!DataBase Synced!***'))
  .catch((err) => console.log(err));


app.get('/', (req, res) => {
  console.log('! >- WELLCOME TO THE SERVER -> !')
});

app.use('/api/v1', userRoutes);
app.use('/api/v1', authRoutes);

app.use(handleError);

// Error NoN-Existing EndPonits
app.all('*', (req, res) => {
  res.status(404).json({
    status: '!-> FAIL <-!',
    message: `  The URL ${req.url} for ~'${req.method}'~, does not exist in our server - Try again...!`,
  })
});

module.exports = app;