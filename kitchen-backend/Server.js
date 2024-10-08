const express = require('express');
const mongoose = require('mongoose');
const Bill = require('./models/Bill'); // Import the Bill model

const app = express();
const port = process.env.PORT || 5000;


// Route to create a new bill
app.post('/api/bills', async (req, res) => {
    try {
      const newBill = new Bill(req.body);
      const savedBill = await newBill.save();
      res.status(201).json(savedBill);
    } catch (error) {
      res.status(500).json({ message: 'Error creating bill', error });
    }
  });
  
  // Route to get all bills
  app.get('/api/bills', async (req, res) => {
    try {
      const bills = await Bill.find();
      res.status(200).json(bills);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching bills', error });
    }
  });
  
  // Route to get a specific bill by ID
  app.get('/api/bills/:id', async (req, res) => {
    try {
      const bill = await Bill.findById(req.params.id);
      if (!bill) {
        return res.status(404).json({ message: 'Bill not found' });
      }
      res.status(200).json(bill);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching bill', error });
    }
  });
  

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect('your-mongodb-connection-string', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Simple route
app.get('/', (req, res) => {
  res.send('Hello, M. Yaseen Kitchen Engineering!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
