const knex = require('knex')(require('../knexfile'));

const getRestaurantAddresses = async (request, response) => {
    try {
        const addressesData = await knex('addresses');

        response.status(200).json(addressesData);
    } catch (error) {
        response.status(400).send(`Error retrieving addresses: ${error}`);
    }
}

module.exports = {
    getRestaurantAddresses
}