// Minimal Express Server
const express = require('express');
const app = express();
app.get('/api/listings', (req, res) => {
  res.json([{
    id: 1,
    title: "Beachfront Villa",
    price: 200
  }]);
});
app.listen(5000, () => console.log('API running on port 5000'));
