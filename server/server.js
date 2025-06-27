// server.js
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './connect.js';
import userRoutes from './routes/auth.js';

// Load environment variables from config.env
dotenv.config({ path: './config.env' });

// Create express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// Mount routes
app.use('/api/users', userRoutes); // e.g., /api/users/register, /api/users/login

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
