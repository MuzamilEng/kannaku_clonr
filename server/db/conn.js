const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log(process.env.URI);
    const conn = await mongoose.connect(process.env.URI);

    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the application with an error code (optional)
  }
};

module.exports = connectDB;
