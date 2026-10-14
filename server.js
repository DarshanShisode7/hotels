const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to the Hotel API!');
});

const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');

app.use('/person', personRoutes);
app.use('/menu', menuRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
