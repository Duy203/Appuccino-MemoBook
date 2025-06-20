const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' }); // change to .env if needed

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connection successful!');
    process.exit();
  })
  .catch((err) => {
    console.error('MongoDB connection failed:', err);
    process.exit(1);
  });
