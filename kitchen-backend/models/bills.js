const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  items: [
    {
      name: { type: String },
      price: { type: Number },
      quantity: { type: Number },
      size: { type: String },
    },
  ],
  total: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const Bill = mongoose.model('Bill', billSchema);
module.exports = Bill;
