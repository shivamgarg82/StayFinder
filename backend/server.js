import connectDB from './db.js';
import Listing from './models/Listing.js';



const express = require('express');
connectDB(); // Connect to MongoDB
const app = express();
app.get('/api/listings', async (req, res) => {
  const listings = await Listing.find(); // Actual DB query
  res.json(listings);
});
app.listen(5000, () => console.log('API running on port 5000'));
