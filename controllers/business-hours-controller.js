const knex = require('knex')(require('../knexfile'));

const getBusinessHours = async (request, response) => {
    try {
        const businessHoursData = await knex('business_hours')
            .where({ 'business_hours.restaurant_id' : request.params.id });

        response.status(200).json(businessHoursData);
    } catch (error) {
        response.status(400).send(`Error retrieving business hours: ${error}`);
    }
}

module.exports = {
    getBusinessHours
}