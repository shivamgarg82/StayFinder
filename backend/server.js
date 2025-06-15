import connectDB from './db.js';
import Listing from './models/Listing.js';



const express = require('express');
connectDB(); // Connect to MongoDB
const app = express();
app.get('/api/listings', async (req, res) => {
  const listings = await Listing.find(); // Actual DB query
  res.json(listings);
});
// Add error handling middleware (create middlewares/errorHandler.js)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

// Add input validation (install express-validator)
router.post('/listings', 
  [
    check('title').notEmpty(),
    check('price').isNumeric()
  ],
  listingController.createListing
);
app.listen(5000, () => console.log('API running on port 5000'));
