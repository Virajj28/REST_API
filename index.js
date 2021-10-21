const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://nervebody:nervebody28@cluster0.w22uk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  () =>
    console.log('Connected to MongoDB Atlas!')
  )

// Import Routes
const authRoute = require('./routes/auth');

// Routes Middleware
app.use('/api/user', authRoute);

app.listen(3000, () => {
    console.log('Server is running');
    });