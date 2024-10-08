const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Billrout = require("./routes/Bills.routes");
require('dotenv').config();

app.use(express.json());

app.use(cors());

const port = process.env.PORT;

// Use the Bill routes
app.use("/bill", Billrout);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/workshopDB')
  .then(() => app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  }))
  .catch((err) => console.error('MongoDB connection error:', err));
