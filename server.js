const express = require('express');
const cors = require('cors');
require('dotenv').config();

const restaurantRoutes = require('./routes/restaurants');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/restaurants', restaurantRoutes);

app.listen(PORT, () => {
    console.log(`running at http://localhost:${PORT}`);
});