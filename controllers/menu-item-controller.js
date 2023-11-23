const knex = require('knex')(require('../knexfile'));

const getMenuItems = async (request, response) => {
    try {
        const menuItemsData = await knex('menu_items')
            .where({ 'menu_items.restaurant_id' : request.params.id })

        response.status(200).json(menuItemsData);
    } catch (error) {
        response.status(400).send(`Error retrieving menu items: ${error}`);
    }
}

module.exports = {
    getMenuItems
}