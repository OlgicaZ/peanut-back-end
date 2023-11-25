const knex = require('knex')(require('../knexfile'));

const getMenuItems = async (request, response) => {
    try {
        const menuItemsData = await knex('menu_items')
            .where({ 'menu_items.restaurant_id' : request.params.id })
            .join('restaurants', 'restaurants.id', 'menu_items.restaurant_id')
            .select('menu_items.id', 'menu_items.restaurant_id', 'restaurant_name', 'menu_item_name', 'category', 'menu_items.description', 'price')

        response.status(200).json(menuItemsData);
    } catch (error) {
        response.status(400).send(`Error retrieving menu items: ${error}`);
    }
}

module.exports = {
    getMenuItems
}