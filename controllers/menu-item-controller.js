const knex = require('knex')(require('../knexfile'));

const getMenuItems = async (request, response) => {
    try {
        const menuItemsData = await knex('menu_items')
            .where({ 'menu_items.restaurant_id': request.params.id })
            .join('restaurants', 'restaurants.id', 'menu_items.restaurant_id')
            //.join('allergens', 'allergens.menu_item_id', 'menu_items.id')
            .select('menu_items.id', 'menu_items.restaurant_id', 'restaurant_name', 'menu_item_name', 'category', 'menu_items.description', 'price')

        response.status(200).json(menuItemsData);
    } catch (error) {
        response.status(400).send(`Error retrieving menu items: ${error}`);
    }
}

const getItemAllergens = async (request, response) => {
    const restaurantId = request.params.id;

    const { dairy, gluten, shellfish, treeNuts, peanuts, fish, vegan, vegetarian, pescatarian } = request.query;
    try {

        const data = [];

        if (dairy) {
            const menuItemsData = await knex('menu_items')
                .rightJoin('allergens', 'menu_items.id', 'allergens.menu_item_id')
                .where('menu_items.restaurant_id', restaurantId)
                .andWhere('allergens.allergen_name', 'dairy')
                .andWhere(builder => {
                    builder.where({
                        'allergens.is_contained': 1,
                        'allergens.can_be_omitted': 1
                    }).orWhere('allergens.is_contained', 0)
                })
            data.push(menuItemsData)
        }

        if (gluten) {
            const menuItemsData = await knex('menu_items')
                .rightJoin('allergens', 'menu_items.id', 'allergens.menu_item_id')
                .where('menu_items.restaurant_id', restaurantId)
                .andWhere('allergens.allergen_name', 'gluten')
                .andWhere(builder => {
                    builder.where({
                        'allergens.is_contained': 1,
                        'allergens.can_be_omitted': 1
                    }).orWhere('allergens.is_contained', 0)
                })
            data.push(menuItemsData)
        }

        if (shellfish) {
            const menuItemsData = await knex('menu_items')
                .rightJoin('allergens', 'menu_items.id', 'allergens.menu_item_id')
                .where('menu_items.restaurant_id', restaurantId)
                .andWhere('allergens.allergen_name', 'shellfish')
                .andWhere(builder => {
                    builder.where({
                        'allergens.is_contained': 1,
                        'allergens.can_be_omitted': 1
                    }).orWhere('allergens.is_contained', 0)
                })
            data.push(menuItemsData)
        }

        if (fish) {
            const menuItemsData = await knex('menu_items')
                .rightJoin('allergens', 'menu_items.id', 'allergens.menu_item_id')
                .where('menu_items.restaurant_id', restaurantId)
                .andWhere('allergens.allergen_name', 'fish')
                .andWhere(builder => {
                    builder.where({
                        'allergens.is_contained': 1,
                        'allergens.can_be_omitted': 1
                    }).orWhere('allergens.is_contained', 0)
                })
            data.push(menuItemsData)
        }

        if (peanuts) {
            const menuItemsData = await knex('menu_items')
                .rightJoin('allergens', 'menu_items.id', 'allergens.menu_item_id')
                .where('menu_items.restaurant_id', restaurantId)
                .andWhere('allergens.allergen_name', 'peanuts')
                .andWhere(builder => {
                    builder.where({
                        'allergens.is_contained': 1,
                        'allergens.can_be_omitted': 1
                    }).orWhere('allergens.is_contained', 0)
                })
            data.push(menuItemsData)
        }

        if (treeNuts) {
            const menuItemsData = await knex('menu_items')
                .rightJoin('allergens', 'menu_items.id', 'allergens.menu_item_id')
                .where('menu_items.restaurant_id', restaurantId)
                .andWhere('allergens.allergen_name', 'tree nuts')
                .andWhere(builder => {
                    builder.where({
                        'allergens.is_contained': 1,
                        'allergens.can_be_omitted': 1
                    }).orWhere('allergens.is_contained', 0)
                })
            data.push(menuItemsData)
        }

        if (vegan) {
            const menuItemsData = await knex('menu_items')
                .rightJoin('dietary_restrictions', 'menu_items.id', 'dietary_restrictions.menu_item_id')
                .where('menu_items.restaurant_id', restaurantId)
                .andWhere('dietary_restrictions.restriction_name', 'vegan')
                .andWhere(builder => {
                    builder.where({
                        'dietary_restrictions.is_safe': 0,
                        'dietary_restrictions.can_be_adjusted': 1
                    }).orWhere('dietary_restrictions.is_safe', 1)
                })
            data.push(menuItemsData)
        }

        if (vegetarian) {
            const menuItemsData = await knex('menu_items')
                .rightJoin('dietary_restrictions', 'menu_items.id', 'dietary_restrictions.menu_item_id')
                .where('menu_items.restaurant_id', restaurantId)
                .andWhere('dietary_restrictions.restriction_name', 'vegetarian')
                .andWhere(builder => {
                    builder.where({
                        'dietary_restrictions.is_safe': 0,
                        'dietary_restrictions.can_be_adjusted': 1
                    }).orWhere('dietary_restrictions.is_safe', 1)
                })
            data.push(menuItemsData)
        }

        if (pescatarian) {
            const menuItemsData = await knex('menu_items')
                .rightJoin('dietary_restrictions', 'menu_items.id', 'dietary_restrictions.menu_item_id')
                .where('menu_items.restaurant_id', restaurantId)
                .andWhere('dietary_restrictions.restriction_name', 'pescatarian')
                .andWhere(builder => {
                    builder.where({
                        'dietary_restrictions.is_safe': 0,
                        'dietary_restrictions.can_be_adjusted': 1
                    }).orWhere('dietary_restrictions.is_safe', 1)
                })
            data.push(menuItemsData)
        }

        response.status(200).json(data);
    } catch (error) {
        response.status(400).send(`Error retrieving menu items: ${error}`);
    }
}


module.exports = {
    getMenuItems,
    getItemAllergens
}