const mongoose = require('mongoose');
require('dotenv').config();

// const mongoURI = process.env.MONGODB_URI_LOCAL;
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.log('MongoDB connection error:', err);
    });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

module.exports = db;