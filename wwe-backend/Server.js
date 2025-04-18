// Load environment variables
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const wrestlerRoutes = require('./Routes/Wrestlers');

const app = express();

// Middleware setup
app.use(cors());                      // Allow frontend (localhost:5173, etc.)
app.use(helmet());                   // Security headers
app.use(express.json());            // Parse incoming JSON

// Rate Limiting (100 requests per minute)
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100,
});
app.use(limiter);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/wrestlers', wrestlerRoutes);

// Server startup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
