const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGODB_URI || process.env.MONGODB_URI_LOCAL;

if (!mongoURI) {
  console.error('MongoDB URI is missing. Set MONGODB_URI or MONGODB_URI_LOCAL in your .env file.');
} else {
  mongoose.connect(mongoURI)
    .then(() => {
      console.log('MongoDB connected');
    })
    .catch((err) => {
      console.log('MongoDB connection error:', err.message);
    });
}

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

module.exports = db;