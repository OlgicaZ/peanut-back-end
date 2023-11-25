const knex = require('knex')(require('../knexfile'));

const getRestaurantBusinessHours = async (request, response) => {
    try {
        const businessHoursData = await knex('business_hours')
            .where({ 'business_hours.restaurant_id' : request.params.id })

        response.status(200).json(businessHoursData);
    } catch (error) {
        response.status(400).send(`Error retrieving business hours: ${error}`);
    }
}

const getAllBusinessHours = async (request, response) => {
    try {

        const { day } = request.query;

        const businessHours = await knex('business_hours')
            .where({'day' : day})
            .join('restaurants', 'business_hours.restaurant_id', 'restaurants.id')
            .select('restaurants.id', 'restaurant_name', 'cuisine', 'description', 'image_url', 'day', 'open_time', 'close_time')

        response.status(200).json(businessHours);
    } catch (error) {
        response.status(400).send(`Error retrieving business hours: ${error}`);
    }
}


module.exports = {
    getRestaurantBusinessHours,
    getAllBusinessHours
}