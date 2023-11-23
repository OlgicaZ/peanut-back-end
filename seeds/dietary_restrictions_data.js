exports.seed = async function (knex) {

  await knex('dietary_restrictions').del()
  await knex('dietary_restrictions').insert([

    //nigiri sampler
    { id: 1, menu_item_id: 1, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 2, menu_item_id: 1, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 3, menu_item_id: 1, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //dragon roll
    { id: 4, menu_item_id: 2, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 5, menu_item_id: 2, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 6, menu_item_id: 2, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //sashimi platter
    { id: 7, menu_item_id: 3, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 8, menu_item_id: 3, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 9, menu_item_id: 3, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //tempura udon
    { id: 10, menu_item_id: 4, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 11, menu_item_id: 4, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 12, menu_item_id: 4, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //miso soup
    { id: 13, menu_item_id: 5, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 14, menu_item_id: 5, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 15, menu_item_id: 5, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //edamame
    { id: 16, menu_item_id: 6, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 17, menu_item_id: 6, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 18, menu_item_id: 6, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //green tea ice cream
    { id: 19, menu_item_id: 7, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 20, menu_item_id: 7, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 21, menu_item_id: 7, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //japanese whiskey flight
    { id: 22, menu_item_id: 8, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 23, menu_item_id: 8, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 24, menu_item_id: 8, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //mango tango roll
    { id: 25, menu_item_id: 9, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 26, menu_item_id: 9, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 27, menu_item_id: 9, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //chirashi bowl
    { id: 28, menu_item_id: 10, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 29, menu_item_id: 10, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 30, menu_item_id: 10, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //sashimi platter
    { id: 31, menu_item_id: 11, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 32, menu_item_id: 11, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 33, menu_item_id: 11, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //rainbow roll
    { id: 34, menu_item_id: 12, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 35, menu_item_id: 12, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 36, menu_item_id: 12, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //spicy salmon roll
    { id: 37, menu_item_id: 13, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 38, menu_item_id: 13, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 39, menu_item_id: 13, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //caterpillar roll
    { id: 40, menu_item_id: 14, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 41, menu_item_id: 14, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 42, menu_item_id: 14, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //yakisoba stir fry
    { id: 43, menu_item_id: 15, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 44, menu_item_id: 15, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 45, menu_item_id: 15, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //zaru soba
    { id: 46, menu_item_id: 16, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 47, menu_item_id: 16, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 48, menu_item_id: 16, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //udon miso soup
    { id: 49, menu_item_id: 17, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 50, menu_item_id: 17, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 51, menu_item_id: 17, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //clam miso soup
    { id: 52, menu_item_id: 18, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 53, menu_item_id: 18, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 54, menu_item_id: 18, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //takoyaki
    { id: 55, menu_item_id: 19, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 56, menu_item_id: 19, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 57, menu_item_id: 19, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //soft shell crab
    { id: 58, menu_item_id: 20, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 59, menu_item_id: 20, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 60, menu_item_id: 20, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //samosas
    { id: 61, menu_item_id: 21, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 62, menu_item_id: 21, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 63, menu_item_id: 21, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //vegetable pakora
    { id: 64, menu_item_id: 22, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 65, menu_item_id: 22, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 66, menu_item_id: 22, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //garlic naan
    { id: 67, menu_item_id: 23, restriction_name: 'vegan', is_safe: false, can_be_adjusted: true },
    { id: 68, menu_item_id: 23, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 69, menu_item_id: 23, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //aloo paratha
    { id: 70, menu_item_id: 24, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 71, menu_item_id: 24, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 72, menu_item_id: 24, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //chicken tikka masala
    { id: 73, menu_item_id: 25, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 74, menu_item_id: 25, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 75, menu_item_id: 25, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: false },

    //vegetable korma
    { id: 76, menu_item_id: 26, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 77, menu_item_id: 26, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 78, menu_item_id: 26, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //chicken biryani
    { id: 79, menu_item_id: 27, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 80, menu_item_id: 27, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 81, menu_item_id: 27, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: false },

    //vegetable biryani
    { id: 82, menu_item_id: 28, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 83, menu_item_id: 28, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 84, menu_item_id: 28, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //gulab jamun
    { id: 85, menu_item_id: 29, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 86, menu_item_id: 29, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 87, menu_item_id: 29, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //kheer
    { id: 88, menu_item_id: 30, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 89, menu_item_id: 30, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 90, menu_item_id: 30, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //paneer tikka
    { id: 91, menu_item_id: 31, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 92, menu_item_id: 31, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 93, menu_item_id: 31, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //bhajiya
    { id: 94, menu_item_id: 32, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 95, menu_item_id: 32, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 96, menu_item_id: 32, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //roti
    { id: 97, menu_item_id: 33, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 98, menu_item_id: 33, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 99, menu_item_id: 33, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //peshawari naan
    { id: 100, menu_item_id: 34, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 101, menu_item_id: 34, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 102, menu_item_id: 34, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //butter chicken
    { id: 103, menu_item_id: 35, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 104, menu_item_id: 35, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 105, menu_item_id: 35, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: false },

    //palak paneer
    { id: 106, menu_item_id: 36, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 107, menu_item_id: 36, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 108, menu_item_id: 36, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //vegetable dum biryani
    { id: 109, menu_item_id: 37, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 110, menu_item_id: 37, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 111, menu_item_id: 37, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //chicken hyderabadi biryani
    { id: 112, menu_item_id: 38, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 113, menu_item_id: 38, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 114, menu_item_id: 38, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: false },

    //rasgulla
    { id: 115, menu_item_id: 39, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 116, menu_item_id: 39, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 117, menu_item_id: 39, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //mango lassi
    { id: 118, menu_item_id: 40, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 119, menu_item_id: 40, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 120, menu_item_id: 40, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //classic cheeseburger
    { id: 121, menu_item_id: 41, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 122, menu_item_id: 41, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 123, menu_item_id: 41, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: false },

    //bacon bbq cheeseburger
    { id: 124, menu_item_id: 42, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 125, menu_item_id: 42, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 126, menu_item_id: 42, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: false },

    //grilled chicken club
    { id: 127, menu_item_id: 43, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 128, menu_item_id: 43, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 129, menu_item_id: 43, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: false },

    //veggie delight wrap
    { id: 130, menu_item_id: 44, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 131, menu_item_id: 44, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 132, menu_item_id: 44, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //crispy onion rings
    { id: 133, menu_item_id: 45, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 134, menu_item_id: 45, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 135, menu_item_id: 45, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //sweet potato fries
    { id: 136, menu_item_id: 46, restriction_name: 'vegan', is_safe: false, can_be_adjusted: true },
    { id: 137, menu_item_id: 46, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 138, menu_item_id: 46, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //classic milkshake
    { id: 139, menu_item_id: 47, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 140, menu_item_id: 47, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 141, menu_item_id: 47, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //iced coffee
    { id: 142, menu_item_id: 48, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 143, menu_item_id: 48, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 144, menu_item_id: 48, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //chocolate brownie sunday
    { id: 145, menu_item_id: 49, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 146, menu_item_id: 49, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 147, menu_item_id: 49, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //apple pie slice
    { id: 148, menu_item_id: 50, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 149, menu_item_id: 50, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 150, menu_item_id: 50, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //classic pancake stack
    { id: 151, menu_item_id: 51, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 152, menu_item_id: 51, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 153, menu_item_id: 51, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //belgian waffle deluxe
    { id: 154, menu_item_id: 52, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 155, menu_item_id: 52, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 156, menu_item_id: 52, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //denver omelette
    { id: 157, menu_item_id: 53, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 158, menu_item_id: 53, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: true },
    { id: 159, menu_item_id: 53, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: true },

    //vegetarian spinach omelette
    { id: 160, menu_item_id: 54, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 161, menu_item_id: 54, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 162, menu_item_id: 54, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //classic BLT sandwich
    { id: 163, menu_item_id: 55, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 164, menu_item_id: 55, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 165, menu_item_id: 55, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: false },

    //double cheeseburger
    { id: 166, menu_item_id: 56, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 167, menu_item_id: 56, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 168, menu_item_id: 56, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: false },

    //chicken fried steak
    { id: 169, menu_item_id: 57, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 170, menu_item_id: 57, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 171, menu_item_id: 57, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: false },

    //mac n cheese
    { id: 172, menu_item_id: 58, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 173, menu_item_id: 58, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 174, menu_item_id: 58, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //homemade apple pie
    { id: 175, menu_item_id: 59, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 176, menu_item_id: 59, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 177, menu_item_id: 59, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //chocolate milkshake
    { id: 178, menu_item_id: 60, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 179, menu_item_id: 60, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 180, menu_item_id: 60, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //guacamole and chips
    { id: 181, menu_item_id: 61, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 182, menu_item_id: 61, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 183, menu_item_id: 61, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //queso fundido
    { id: 184, menu_item_id: 62, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 185, menu_item_id: 62, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 186, menu_item_id: 62, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //carne asada tacos
    { id: 187, menu_item_id: 63, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 188, menu_item_id: 63, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 189, menu_item_id: 63, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: false },

    //shrimp tacos
    { id: 190, menu_item_id: 64, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 191, menu_item_id: 64, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 192, menu_item_id: 64, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //chicken burrito
    { id: 193, menu_item_id: 65, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 194, menu_item_id: 65, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 195, menu_item_id: 65, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: false },

    //vegetarian burrito
    { id: 196, menu_item_id: 66, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 197, menu_item_id: 66, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 198, menu_item_id: 66, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //cheese enchiladas
    { id: 199, menu_item_id: 67, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 200, menu_item_id: 67, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 201, menu_item_id: 67, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //beef enchiladas
    { id: 202, menu_item_id: 68, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 203, menu_item_id: 68, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 204, menu_item_id: 68, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //mexican street corn
    { id: 205, menu_item_id: 69, restriction_name: 'vegan', is_safe: false, can_be_adjusted: true },
    { id: 206, menu_item_id: 69, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 207, menu_item_id: 69, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //chips and salsa
    { id: 208, menu_item_id: 70, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 209, menu_item_id: 70, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 210, menu_item_id: 70, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //tortilla soup
    { id: 211, menu_item_id: 71, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 212, menu_item_id: 71, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 213, menu_item_id: 71, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: false },

    //sopa de frijoles
    { id: 214, menu_item_id: 72, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 215, menu_item_id: 72, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 216, menu_item_id: 72, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: false },

    //mole poblano
    { id: 217, menu_item_id: 73, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 218, menu_item_id: 73, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 219, menu_item_id: 73, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: false },

    //carnitas plate
    { id: 220, menu_item_id: 74, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 221, menu_item_id: 74, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 222, menu_item_id: 74, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: false },

    //churros with chocolate sauce
    { id: 223, menu_item_id: 75, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 224, menu_item_id: 75, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 225, menu_item_id: 75, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //tres leches cake
    { id: 226, menu_item_id: 76, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 227, menu_item_id: 76, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 228, menu_item_id: 76, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //horchata
    { id: 229, menu_item_id: 77, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 230, menu_item_id: 77, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 231, menu_item_id: 77, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //jamaica agua fresca
    { id: 232, menu_item_id: 78, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 233, menu_item_id: 78, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 234, menu_item_id: 78, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //queso flameado
    { id: 235, menu_item_id: 79, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 236, menu_item_id: 79, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 237, menu_item_id: 79, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: false },

    //taco salad
    { id: 238, menu_item_id: 80, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 239, menu_item_id: 80, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 240, menu_item_id: 80, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: false },

    //margherita pizza
    { id: 241, menu_item_id: 81, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 242, menu_item_id: 81, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 243, menu_item_id: 81, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //pepperoni feast
    { id: 244, menu_item_id: 82, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 245, menu_item_id: 82, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 246, menu_item_id: 82, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: false },

    //vegetarian delight
    { id: 247, menu_item_id: 83, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 248, menu_item_id: 83, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 249, menu_item_id: 83, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //meat lovers delight
    { id: 250, menu_item_id: 84, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 251, menu_item_id: 84, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 252, menu_item_id: 84, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: false },

    //classic calzone
    { id: 253, menu_item_id: 85, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 254, menu_item_id: 85, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 255, menu_item_id: 85, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //spinach and feta calzone
    { id: 256, menu_item_id: 86, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 257, menu_item_id: 86, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 258, menu_item_id: 86, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //garlic knots
    { id: 259, menu_item_id: 87, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 260, menu_item_id: 87, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 261, menu_item_id: 87, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //mozarella sticks
    { id: 262, menu_item_id: 88, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 263, menu_item_id: 88, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 264, menu_item_id: 88, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //caprese salad
    { id: 265, menu_item_id: 89, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 266, menu_item_id: 89, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 267, menu_item_id: 89, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //greek salad
    { id: 268, menu_item_id: 90, restriction_name: 'vegan', is_safe: false, can_be_adjusted: true },
    { id: 269, menu_item_id: 90, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 270, menu_item_id: 90, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //spaghetti bolognese
    { id: 271, menu_item_id: 91, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 272, menu_item_id: 91, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 273, menu_item_id: 91, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: false },

    //chicken alfredo
    { id: 274, menu_item_id: 92, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 275, menu_item_id: 92, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: true },
    { id: 276, menu_item_id: 92, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: true },

    //quatro formaggi pizza
    { id: 277, menu_item_id: 93, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 278, menu_item_id: 93, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 279, menu_item_id: 93, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //mushroom truffle pizza
    { id: 280, menu_item_id: 94, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 281, menu_item_id: 94, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 282, menu_item_id: 94, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //seafood risotto
    { id: 283, menu_item_id: 95, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 284, menu_item_id: 95, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 285, menu_item_id: 95, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //wild mushroom risotto
    { id: 286, menu_item_id: 96, restriction_name: 'vegan', is_safe: false, can_be_adjusted: true },
    { id: 287, menu_item_id: 96, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 288, menu_item_id: 96, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //bruschetta
    { id: 289, menu_item_id: 97, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 290, menu_item_id: 97, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 291, menu_item_id: 97, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //caprese skewers
    { id: 292, menu_item_id: 98, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 293, menu_item_id: 98, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 294, menu_item_id: 98, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //tiramisu
    { id: 295, menu_item_id: 99, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 296, menu_item_id: 99, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 297, menu_item_id: 99, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //cannoli
    { id: 298, menu_item_id: 100, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 299, menu_item_id: 100, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 300, menu_item_id: 100, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //quinoa buddha bowl
    { id: 301, menu_item_id: 101, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 302, menu_item_id: 101, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 303, menu_item_id: 101, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //chickpea curry bowl
    { id: 304, menu_item_id: 102, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 305, menu_item_id: 102, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 306, menu_item_id: 102, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //black bean burger
    { id: 307, menu_item_id: 103, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 308, menu_item_id: 103, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 309, menu_item_id: 103, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //mushroom quinoa burger
    { id: 310, menu_item_id: 104, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 311, menu_item_id: 104, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 312, menu_item_id: 104, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //veggie supreme pizza
    { id: 313, menu_item_id: 105, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 314, menu_item_id: 105, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 315, menu_item_id: 105, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //pesto zoodle pizza
    { id: 316, menu_item_id: 106, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 317, menu_item_id: 106, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 318, menu_item_id: 106, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //falafel wrap
    { id: 319, menu_item_id: 107, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 320, menu_item_id: 107, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 321, menu_item_id: 107, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //avocado and bean wrap
    { id: 322, menu_item_id: 108, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 323, menu_item_id: 108, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 324, menu_item_id: 108, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //vegan chocolate cake
    { id: 325, menu_item_id: 109, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 326, menu_item_id: 109, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 327, menu_item_id: 109, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },
    
    //coconut mango sorbet
    { id: 328, menu_item_id: 110, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 329, menu_item_id: 110, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 330, menu_item_id: 110, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //acai berry bowl
    { id: 331, menu_item_id: 111, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 332, menu_item_id: 111, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 333, menu_item_id: 111, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //quinoa power bowl
    { id: 334, menu_item_id: 112, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 335, menu_item_id: 112, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 336, menu_item_id: 112, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //mango avocado salad
    { id: 337, menu_item_id: 113, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 338, menu_item_id: 113, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 339, menu_item_id: 113, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //superfood caesar salad
    { id: 340, menu_item_id: 114, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 341, menu_item_id: 114, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 342, menu_item_id: 114, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //grilled chicken power plate
    { id: 343, menu_item_id: 115, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 344, menu_item_id: 115, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 345, menu_item_id: 115, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: false },

    //salmon and avocado wrap
    { id: 346, menu_item_id: 116, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 347, menu_item_id: 116, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 348, menu_item_id: 116, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //vegetable hummus wrap
    { id: 349, menu_item_id: 117, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 350, menu_item_id: 117, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 351, menu_item_id: 117, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //turkey and quinoa wrap
    { id: 352, menu_item_id: 118, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 353, menu_item_id: 118, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 354, menu_item_id: 118, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: false },

    //chia seed pudding
    { id: 355, menu_item_id: 119, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 356, menu_item_id: 119, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 357, menu_item_id: 119, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //roasted chickpeas
    { id: 358, menu_item_id: 120, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 359, menu_item_id: 120, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 360, menu_item_id: 120, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //hummus trio
    { id: 361, menu_item_id: 121, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 362, menu_item_id: 121, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 363, menu_item_id: 121, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //falafel platter
    { id: 364, menu_item_id: 122, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 365, menu_item_id: 122, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 366, menu_item_id: 122, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //chicken souvlaki skewers
    { id: 367, menu_item_id: 123, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 368, menu_item_id: 123, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 369, menu_item_id: 123, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: false },

    //beef kebab plate
    { id: 370, menu_item_id: 124, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 371, menu_item_id: 124, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 372, menu_item_id: 124, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: false },

    //greek salad
    { id: 373, menu_item_id: 125, restriction_name: 'vegan', is_safe: false, can_be_adjusted: true },
    { id: 374, menu_item_id: 125, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 375, menu_item_id: 125, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //mediterranean quinoa salad
    { id: 376, menu_item_id: 126, restriction_name: 'vegan', is_safe: false, can_be_adjusted: true },
    { id: 377, menu_item_id: 126, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 378, menu_item_id: 126, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //vegetarian pita pocket
    { id: 379, menu_item_id: 127, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 380, menu_item_id: 127, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 381, menu_item_id: 127, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //lamb gyro wrap
    { id: 382, menu_item_id: 128, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 383, menu_item_id: 128, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 384, menu_item_id: 128, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: false },

    //stuffed grape leaves
    { id: 385, menu_item_id: 129, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 386, menu_item_id: 129, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 387, menu_item_id: 129, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //moussaka
    { id: 388, menu_item_id: 130, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 389, menu_item_id: 130, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 390, menu_item_id: 130, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: false },

    //meze platter
    { id: 391, menu_item_id: 131, restriction_name: 'vegan', is_safe: false, can_be_adjusted: true },
    { id: 392, menu_item_id: 131, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 393, menu_item_id: 131, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //lentil soup
    { id: 394, menu_item_id: 132, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 395, menu_item_id: 132, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 396, menu_item_id: 132, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //grilled octopus
    { id: 397, menu_item_id: 133, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 398, menu_item_id: 133, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 399, menu_item_id: 133, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //lamb kofta skewers
    { id: 400, menu_item_id: 134, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 401, menu_item_id: 134, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 402, menu_item_id: 134, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: false },

    //tabbouleh salad
    { id: 403, menu_item_id: 135, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 404, menu_item_id: 135, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 405, menu_item_id: 135, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //fattoush salad
    { id: 406, menu_item_id: 136, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 407, menu_item_id: 136, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 408, menu_item_id: 136, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //falafel wrap
    { id: 409, menu_item_id: 137, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 410, menu_item_id: 137, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 411, menu_item_id: 137, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //shawarma wrap
    { id: 412, menu_item_id: 138, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 413, menu_item_id: 138, restriction_name: 'vegetarian', is_safe: false, can_be_adjusted: false },
    { id: 414, menu_item_id: 138, restriction_name: 'pescatarian', is_safe: false, can_be_adjusted: false },

    //dolma
    { id: 415, menu_item_id: 139, restriction_name: 'vegan', is_safe: true, can_be_adjusted: false },
    { id: 416, menu_item_id: 139, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 417, menu_item_id: 139, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },

    //spanakopita
    { id: 418, menu_item_id: 140, restriction_name: 'vegan', is_safe: false, can_be_adjusted: false },
    { id: 419, menu_item_id: 140, restriction_name: 'vegetarian', is_safe: true, can_be_adjusted: false },
    { id: 420, menu_item_id: 140, restriction_name: 'pescatarian', is_safe: true, can_be_adjusted: false },
    
  ]);
};
