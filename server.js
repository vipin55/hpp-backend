const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// const User = require('./models/User'); // Example model

const app = express();
app.use(express.json());

const JWT_SECRET = 'your_jwt_secret_key';

const hardcodedUser = {
    email: 'doctor@example.com',
    password: '$2a$10$uXTZ.yiV0izZY3lm/oeCvuK8gdINLrDVi7J.QSqaHka6D.lj1Dxlq', // Hashed password for "password123"
  };

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    // const user = await User.findOne({ email });

    // if (!user) {
    //   return res.status(400).json({ message: 'User not found' });
    // }

    if (email !== hardcodedUser.email) {
        return res.status(400).json({ message: 'User not found' });
      }

    // Compare password with the stored hash
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // Create JWT token
    // const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    const token = jwt.sign({ userId: 1, role: 'doctor' }, JWT_SECRET, { expiresIn: '1h' });

    // Send token to the client
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Start server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});

  
