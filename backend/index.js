const express = require('express');
const signupModels = require('./models/signupModels');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/logincredentials')
  .then(() => console.log('Connected to MongoDB'))   
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.post('/register', async (req, res) => {
  const { signname, signusername, signuseremail, signuserPassword } = req.body;

  if (!signname || !signusername || !signuseremail || !signuserPassword) {
    return res.status(400).json({ error: 'Name, username, email, and password are required' });
  }

  try {
    const hashedPass = await bcrypt.hash(signuserPassword, 10);
    const newUser = {
      name: signname,
      userName: signusername,
      userEmail: signuseremail,
      userPassword: hashedPass,
    };

    const savedUser = await signupModels.create(newUser);
    res.json(savedUser);
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({ error: 'Email already exists' });
    } else {
      console.error('Error creating user:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

app.post('/login', async (req, res) => {
  const { loginemail, loginpassword } = req.body;

  if (!loginemail || !loginpassword) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const user = await signupModels.findOne({ userEmail: loginemail });

    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(loginpassword, user.userPassword);

    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful' });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
