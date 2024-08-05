const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const BookingModels = require('./models/BookingModel');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/logincredentials')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.post('/booking', async (req, res) => {
  const { name, email, days, price } = req.body;

  if (!name || !email || !days || !price) {
    return res.status(400).json({ error: 'Name, email, days, and price are required' });
  }

  try {
    const newBooking = { name, email, days, price };
    const savedBooking = await BookingModels.create(newBooking);
    res.json(savedBooking);
  } catch (err) {
      console.error('Error creating booking:', err);
      res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3002, () => {
  console.log('Server is running on port 3002');
});

