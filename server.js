// server.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/my-database', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define User Schema
const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  email: String,
  password: String,
  userType: String // to store the role selected by the user
});

// Create User Model
const User = mongoose.model('User', userSchema);

// Register Route
app.post('/register', async (req, res) => {
  const { firstname, lastname, username, email, password, userType } = req.body;

  try {
    // Create a new user
    const newUser = new User({ firstname, lastname, username, email, password, userType });
    await newUser.save();

    // Respond with success message
    res.status(201).json({ message: 'User registered successfully', userType });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while registering the user' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
