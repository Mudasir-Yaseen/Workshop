const Bill = require("../models/bills"); // Ensure the path is correct

const createBill = async (req, res) => { // Fixed the function name
  try {
    const { customerName, items, total } = req.body;

    // Create a new bill document
    const newBill = new Bill({ customerName, items, total });
    await newBill.save(); // Save the bill to the database

    res.status(201).json({ message: 'Bill saved successfully!', bill: newBill });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save bill', error: error.message });
  }
};

module.exports = {
  createBill, // Fixed the exported function name
};
