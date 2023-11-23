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
            .join('business_hours', 'business_hours.restaurant_id', 'restaurants.id')
            .join('addresses', 'addresses.restaurant_id', 'restaurants.id')

        response.status(200).json(restaurantsData);
    } catch (error) {
        response.status(400).send(`Error retrieving restaurants: ${error}`);
    }
}

module.exports = {
    getRestaurants,
    getRestaurant
}