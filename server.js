const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', (_request, response) => {
    response.send('Welcome home!')
})

app.listen(PORT, () => {
    console.log(`running at http://localhost:${PORT}`);
});