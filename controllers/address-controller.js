const knex = require('knex')(require('../knexfile'));

const getRestaurantAddresses = async (request, response) => {
    try {
        const addressesData = await knex('addresses')
            .join('restaurants', 'restaurants.id', 'addresses.restaurant_id')
            .select('addresses.id', 'street_address', 'city', 'state', 'postal_code', 'country', 'restaurant_name', 'image_url')

        response.status(200).json(addressesData);
    } catch (error) {
        response.status(400).send(`Error retrieving addresses: ${error}`);
    }
}

module.exports = {
    getRestaurantAddresses
}