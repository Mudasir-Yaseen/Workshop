const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  items: [
    {
      name: String,
      price: Number,
      quantity: Number,
      size: String,
    },
  ],
  total: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Bill', billSchema);
