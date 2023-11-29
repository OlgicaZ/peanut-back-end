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

        const query = [];

        if (dairy) {
            query.push({'allergens.allergen_name' : 'dairy', 'allergens.is_contained' : 0});
            //query.push({'allergens.allergen_name' : 'dairy', 'allergens.is_contained' : 1, 'allergens.can_be_omitted' : 1});
        }

        if (gluten) {
            query.push({'allergens.allergen_name' : 'gluten', 'allergens.is_contained' : 0});
            //query.push({'allergens.allergen_name' : 'gluten', 'allergens.is_contained' : 1, 'allergens.can_be_omitted' : 1});

        }

        if (shellfish) {
            query.push({'allergens.allergen_name' : 'shellfish', 'allergens.is_contained' : 0});
            //query.push({'allergens.allergen_name' : 'shellfish', 'allergens.is_contained' : 1, 'allergens.can_be_omitted' : 1});

        }

        if (fish) {
            query.push({'allergens.allergen_name' : 'fish', 'allergens.is_contained' : 0});
            //query.push({'allergens.allergen_name' : 'fish', 'allergens.is_contained' : 1, 'allergens.can_be_omitted' : 1});

        }

        if (peanuts) {
            query.push({'allergens.allergen_name' : 'peanuts', 'allergens.is_contained' : 0});
            //query.push({'allergens.allergen_name' : 'peanuts', 'allergens.is_contained' : 1, 'allergens.can_be_omitted' : 1});

        }

        if (treeNuts) {
            query.push({'allergens.allergen_name' : 'tree_nuts', 'allergens.is_contained' : 0});
            //query.push({'allergens.allergen_name' : 'tree_nuts', 'allergens.is_contained' : 1, 'allergens.can_be_omitted' : 1});

        }

        if (vegan) {
            query.push({'dietary_restrictions.restriction_name' : 'vegan', 'dietary_restrictions.is_safe' : 1});
            //query.push({'dietary_restrictions.restriction_name' : 'vegan', 'dietary_restrictions.is_safe' : 0, 'dietary_restrictions.can_be_adjusted' : 1});

        }

        if (vegetarian) {
            query.push({'dietary_restrictions.restriction_name' : 'vegetarian', 'dietary_restrictions.is_safe' : 1});
            //query.push({'dietary_restrictions.restriction_name' : 'vegetarian', 'dietary_restrictions.is_safe' : 0, 'dietary_restrictions.can_be_adjusted' : 1});

        }

        if (pescatarian) {
            query.push({'dietary_restrictions.restriction_name' : 'pescatarian', 'dietary_restrictions.is_safe' : 1});
            //query.push({'dietary_restrictions.restriction_name' : 'pescatarian', 'dietary_restrictions.is_safe' : 0, 'dietary_restrictions.can_be_adjusted' : 1});

        }

        const data = await knex('menu_items')
            .rightJoin('allergens', 'menu_items.id', 'allergens.menu_item_id')
            .rightJoin('dietary_restrictions', 'menu_items.id', 'dietary_restrictions.menu_item_id')
            .where('menu_items.restaurant_id', restaurantId)
            .andWhere(builder => {
                for (const condition of query) {
                    builder.andWhere(innerBuilder => {
                        for (const key in condition) {
                            innerBuilder.where(key, condition[key]);
                        }
                    });
                }
            });

            const mergedItems = data.reduce((result, currentItem) => {
                const { menu_item_id } = currentItem;
            
                if (!result[menu_item_id]) {
                    result[menu_item_id] = { ...currentItem }; 
                } else {
                    result[menu_item_id] = {
                        restaurant_id: currentItem.restaurant_id,
                        menu_item_name: currentItem.menu_item_name,
                        description: currentItem.description,
                        price: currentItem.price,
                        category: currentItem.category,
                        menu_item_id: currentItem.menu_item_id,
                    };
                }
            
                return result;
            }, {});
            
            const mergedArray = Object.values(mergedItems);

        console.log(mergedArray);
        response.status(200).json(mergedArray);
    } catch (error) {
        response.status(400).send(`Error retrieving menu items: ${error}`);
    }
}


module.exports = {
    getMenuItems,
    getItemAllergens
}