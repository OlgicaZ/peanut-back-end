const knex = require('knex')(require('../knexfile'));

const getRestaurants = async (_request, response) => {
    try {
        const restaurantsData = await knex('restaurants');

        response.status(200).json(restaurantsData);
    } catch (error) {
        response.status(400).send(`Error retrieving restaurants: ${error}`);
    }
}

const getRestaurant = async (request, response) => {
    try {
        const { id } = request.params;
        const restaurantsData = await knex('restaurants')
            .where({ 'restaurants.id' : id })
            .join('addresses', 'addresses.restaurant_id', 'restaurants.id')
            .select('restaurants.id', 'restaurant_name', 'cuisine', 'description', 'about', 'contact_phone', 'contact_email', 'image_url', 'street_address', 'city', 'state', 'postal_code', 'country');

        response.status(200).json(restaurantsData);
    } catch (error) {
        response.status(400).send(`Error retrieving restaurants: ${error}`);
    }
}

module.exports = {
    getRestaurants,
    getRestaurant
}