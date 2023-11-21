const express = require('express');
const cors = require('cors');
const knex = require('knex')(require('./knexfile'));

require('dotenv').config();

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());

app.use(cors());

app.get('/', (_request, response) => {
    response.send('Welcome home!')
})

app.get('/andrea', (_req, res) => {
    async function getSome() {
        try {
            const response = await knex('addresses');
            res.json(response);
        }
        catch (error) {
            res.send(`this is the error: ${error}`);
        }
    }
    getSome();
})

app.listen(PORT, () => {
    console.log(`running at http://localhost:${PORT}`);
});