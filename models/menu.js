const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  taste: {
    type: String,
    enum: ['sweet', 'sour', 'spicy', 'bitter', 'salty'],
    required: true
  },
  isDrink: {
    type: Boolean,
    required: true
  },
  ingredients: {
    type: [String],
  },
  num_sales: {
    type: Number,
    default: 0
  }
});

const Menu = mongoose.model('Menu', personSchema);

module.exports = Menu;