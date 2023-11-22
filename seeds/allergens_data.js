exports.seed = async function (knex) {

  await knex('allergens').del()
  await knex('allergens').insert([

    //nigiri sampler
    { id: 1, menu_item_id: 1, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 2, menu_item_id: 1, allergen_name: 'gluten', is_contained: true, can_be_omitted: true },
    { id: 3, menu_item_id: 1, allergen_name: 'shellfish', is_contained: true, can_be_omitted: true },
    { id: 4, menu_item_id: 1, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 5, menu_item_id: 1, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 6, menu_item_id: 1, allergen_name: 'fish', is_contained: true, can_be_omitted: true },

    //dragon roll
    { id: 7, menu_item_id: 2, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 8, menu_item_id: 2, allergen_name: 'gluten', is_contained: true, can_be_omitted: true },
    { id: 9, menu_item_id: 2, allergen_name: 'shellfish', is_contained: true, can_be_omitted: false },
    { id: 10, menu_item_id: 2, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 11, menu_item_id: 2, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 12, menu_item_id: 2, allergen_name: 'fish', is_contained: true, can_be_omitted: false },

    //sashimi platter
    { id: 13, menu_item_id: 3, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 14, menu_item_id: 3, allergen_name: 'gluten', is_contained: true, can_be_omitted: true },
    { id: 15, menu_item_id: 3, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 16, menu_item_id: 3, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 17, menu_item_id: 3, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 18, menu_item_id: 3, allergen_name: 'fish', is_contained: true, can_be_omitted: false },

    //tempura udon
    { id: 19, menu_item_id: 4, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 20, menu_item_id: 4, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 21, menu_item_id: 4, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 22, menu_item_id: 4, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 23, menu_item_id: 4, allergen_name: 'peanuts', is_contained: true, can_be_omitted: true },
    { id: 24, menu_item_id: 4, allergen_name: 'fish', is_contained: false, can_be_omitted: false },


    //miso soup
    { id: 25, menu_item_id: 5, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 26, menu_item_id: 5, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 27, menu_item_id: 5, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 28, menu_item_id: 5, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 29, menu_item_id: 5, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 30, menu_item_id: 5, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //edamame
    { id: 31, menu_item_id: 6, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 32, menu_item_id: 6, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 33, menu_item_id: 6, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 34, menu_item_id: 6, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 35, menu_item_id: 6, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 36, menu_item_id: 6, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //green tea ice cream
    { id: 37, menu_item_id: 7, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 38, menu_item_id: 7, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 39, menu_item_id: 7, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 40, menu_item_id: 7, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 41, menu_item_id: 7, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 42, menu_item_id: 7, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //japanese whiskey flight
    { id: 43, menu_item_id: 8, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 44, menu_item_id: 8, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 45, menu_item_id: 8, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 46, menu_item_id: 8, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 47, menu_item_id: 8, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 48, menu_item_id: 8, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //mango tango roll
    { id: 49, menu_item_id: 9, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 50, menu_item_id: 9, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 51, menu_item_id: 9, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 52, menu_item_id: 9, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 53, menu_item_id: 9, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 54, menu_item_id: 9, allergen_name: 'fish', is_contained: true, can_be_omitted: false },

    //chirashi bowl
    { id: 55, menu_item_id: 10, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 56, menu_item_id: 10, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 57, menu_item_id: 10, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 58, menu_item_id: 10, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 59, menu_item_id: 10, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 60, menu_item_id: 10, allergen_name: 'fish', is_contained: true, can_be_omitted: false },

    //sashimi platter
    { id: 61, menu_item_id: 11, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 62, menu_item_id: 11, allergen_name: 'gluten', is_contained: true, can_be_omitted: true },
    { id: 63, menu_item_id: 11, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 64, menu_item_id: 11, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 65, menu_item_id: 11, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 66, menu_item_id: 11, allergen_name: 'fish', is_contained: true, can_be_omitted: false },

    //rainbow roll
    { id: 67, menu_item_id: 12, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 68, menu_item_id: 12, allergen_name: 'gluten', is_contained: true, can_be_omitted: true },
    { id: 69, menu_item_id: 12, allergen_name: 'shellfish', is_contained: true, can_be_omitted: false },
    { id: 70, menu_item_id: 12, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 71, menu_item_id: 12, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 72, menu_item_id: 12, allergen_name: 'fish', is_contained: true, can_be_omitted: false },

    //spicy salmon roll
    { id: 73, menu_item_id: 13, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 74, menu_item_id: 13, allergen_name: 'gluten', is_contained: true, can_be_omitted: true },
    { id: 75, menu_item_id: 13, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 76, menu_item_id: 13, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 77, menu_item_id: 13, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 78, menu_item_id: 13, allergen_name: 'fish', is_contained: true, can_be_omitted: false },

    //catepillar roll
    { id: 79, menu_item_id: 14, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 80, menu_item_id: 14, allergen_name: 'gluten', is_contained: true, can_be_omitted: true },
    { id: 81, menu_item_id: 14, allergen_name: 'shellfish', is_contained: true, can_be_omitted: false },
    { id: 82, menu_item_id: 14, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 83, menu_item_id: 14, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 84, menu_item_id: 14, allergen_name: 'fish', is_contained: true, can_be_omitted: false },

    //yakisoba stir-fry
    { id: 85, menu_item_id: 15, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 86, menu_item_id: 15, allergen_name: 'gluten', is_contained: true, can_be_omitted: true },
    { id: 87, menu_item_id: 15, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 88, menu_item_id: 15, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 89, menu_item_id: 15, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 90, menu_item_id: 15, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //zaru soba
    { id: 91, menu_item_id: 16, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 92, menu_item_id: 16, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 93, menu_item_id: 16, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 94, menu_item_id: 16, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 95, menu_item_id: 16, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 96, menu_item_id: 16, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //udon miso soup
    { id: 97, menu_item_id: 17, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 98, menu_item_id: 17, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 99, menu_item_id: 17, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 100, menu_item_id: 17, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 101, menu_item_id: 17, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 102, menu_item_id: 17, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //clam miso soup
    { id: 103, menu_item_id: 18, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 104, menu_item_id: 18, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 105, menu_item_id: 18, allergen_name: 'shellfish', is_contained: true, can_be_omitted: false },
    { id: 106, menu_item_id: 18, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 107, menu_item_id: 18, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 108, menu_item_id: 18, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //takoyaki
    { id: 109, menu_item_id: 19, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 110, menu_item_id: 19, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 111, menu_item_id: 19, allergen_name: 'shellfish', is_contained: true, can_be_omitted: false },
    { id: 112, menu_item_id: 19, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 113, menu_item_id: 19, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 114, menu_item_id: 19, allergen_name: 'fish', is_contained: true, can_be_omitted: false },

    //soft shell crab
    { id: 115, menu_item_id: 20, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 116, menu_item_id: 20, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 117, menu_item_id: 20, allergen_name: 'shellfish', is_contained: true, can_be_omitted: false },
    { id: 118, menu_item_id: 20, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 119, menu_item_id: 20, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 120, menu_item_id: 20, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //samosas
    { id: 121, menu_item_id: 21, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 122, menu_item_id: 21, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 123, menu_item_id: 21, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 124, menu_item_id: 21, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 125, menu_item_id: 21, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 126, menu_item_id: 21, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //vegetable pakora
    { id: 127, menu_item_id: 22, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 128, menu_item_id: 22, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 129, menu_item_id: 22, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 130, menu_item_id: 22, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 131, menu_item_id: 22, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 132, menu_item_id: 22, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //garlic naan
    { id: 133, menu_item_id: 23, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 134, menu_item_id: 23, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 135, menu_item_id: 23, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 136, menu_item_id: 23, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 137, menu_item_id: 23, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 138, menu_item_id: 23, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //aloo paratha
    { id: 139, menu_item_id: 24, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 140, menu_item_id: 24, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 141, menu_item_id: 24, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 142, menu_item_id: 24, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 143, menu_item_id: 24, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 144, menu_item_id: 24, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //chicken tikka masala
    { id: 145, menu_item_id: 25, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 146, menu_item_id: 25, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 147, menu_item_id: 25, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 148, menu_item_id: 25, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 149, menu_item_id: 25, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 150, menu_item_id: 25, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //vegetable korma
    { id: 151, menu_item_id: 26, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 152, menu_item_id: 26, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 153, menu_item_id: 26, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 154, menu_item_id: 26, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 155, menu_item_id: 26, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 156, menu_item_id: 26, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //chicken biryani
    { id: 157, menu_item_id: 27, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 158, menu_item_id: 27, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 159, menu_item_id: 27, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 160, menu_item_id: 27, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 161, menu_item_id: 27, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 162, menu_item_id: 27, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //vegetable biryani
    { id: 163, menu_item_id: 28, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 164, menu_item_id: 28, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 165, menu_item_id: 28, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 166, menu_item_id: 28, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 167, menu_item_id: 28, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 168, menu_item_id: 28, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //gulab jamun
    { id: 169, menu_item_id: 29, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 170, menu_item_id: 29, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 171, menu_item_id: 29, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 172, menu_item_id: 29, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 173, menu_item_id: 29, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 174, menu_item_id: 29, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //kheer
    { id: 175, menu_item_id: 30, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 176, menu_item_id: 30, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 177, menu_item_id: 30, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 178, menu_item_id: 30, allergen_name: 'tree nuts', is_contained: true, can_be_omitted: false },
    { id: 179, menu_item_id: 30, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 180, menu_item_id: 30, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //paneer tikka
    { id: 181, menu_item_id: 31, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 182, menu_item_id: 31, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 183, menu_item_id: 31, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 184, menu_item_id: 31, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 185, menu_item_id: 31, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 186, menu_item_id: 31, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //bhajiya
    { id: 187, menu_item_id: 32, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 188, menu_item_id: 32, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 189, menu_item_id: 32, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 190, menu_item_id: 32, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 191, menu_item_id: 32, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 192, menu_item_id: 32, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //roti
    { id: 193, menu_item_id: 33, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 194, menu_item_id: 33, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 195, menu_item_id: 33, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 196, menu_item_id: 33, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 197, menu_item_id: 33, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 198, menu_item_id: 33, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //peshawari naan
    { id: 199, menu_item_id: 34, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 200, menu_item_id: 34, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 201, menu_item_id: 34, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 202, menu_item_id: 34, allergen_name: 'tree nuts', is_contained: true, can_be_omitted: false },
    { id: 203, menu_item_id: 34, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 204, menu_item_id: 34, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //butter chicken
    { id: 205, menu_item_id: 35, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 206, menu_item_id: 35, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 207, menu_item_id: 35, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 208, menu_item_id: 35, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 209, menu_item_id: 35, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 210, menu_item_id: 35, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //palak paneer
    { id: 211, menu_item_id: 36, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 212, menu_item_id: 36, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 213, menu_item_id: 36, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 214, menu_item_id: 36, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 215, menu_item_id: 36, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 216, menu_item_id: 36, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //vegetable dum biryani
    { id: 217, menu_item_id: 37, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 218, menu_item_id: 37, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 219, menu_item_id: 37, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 220, menu_item_id: 37, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 221, menu_item_id: 37, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 222, menu_item_id: 37, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //chicken hyderabadi biryani
    { id: 223, menu_item_id: 38, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 224, menu_item_id: 38, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 225, menu_item_id: 38, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 226, menu_item_id: 38, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 227, menu_item_id: 38, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 228, menu_item_id: 38, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //rasgulla
    { id: 229, menu_item_id: 39, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 230, menu_item_id: 39, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 231, menu_item_id: 39, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 232, menu_item_id: 39, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 233, menu_item_id: 39, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 234, menu_item_id: 39, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //mango lassi
    { id: 235, menu_item_id: 40, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 236, menu_item_id: 40, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 237, menu_item_id: 40, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 238, menu_item_id: 40, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 239, menu_item_id: 40, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 240, menu_item_id: 40, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //classic cheeseburger
    { id: 241, menu_item_id: 41, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 242, menu_item_id: 41, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 243, menu_item_id: 41, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 244, menu_item_id: 41, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 245, menu_item_id: 41, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 246, menu_item_id: 41, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //bacon BBQ burger
    { id: 247, menu_item_id: 42, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 248, menu_item_id: 42, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 249, menu_item_id: 42, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 250, menu_item_id: 42, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 251, menu_item_id: 42, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 252, menu_item_id: 42, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //grilled chicken club
    { id: 253, menu_item_id: 43, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 254, menu_item_id: 43, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 255, menu_item_id: 43, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 256, menu_item_id: 43, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 257, menu_item_id: 43, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 258, menu_item_id: 43, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //veggie delight wrap
    { id: 259, menu_item_id: 44, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 260, menu_item_id: 44, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 261, menu_item_id: 44, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 262, menu_item_id: 44, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 263, menu_item_id: 44, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 264, menu_item_id: 44, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //crispy onion rings
    { id: 265, menu_item_id: 45, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 266, menu_item_id: 45, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 267, menu_item_id: 45, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 268, menu_item_id: 45, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 269, menu_item_id: 45, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 270, menu_item_id: 45, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //sweet potato fries
    { id: 271, menu_item_id: 46, allergen_name: 'dairy', is_contained: true, can_be_omitted: true },
    { id: 272, menu_item_id: 46, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 273, menu_item_id: 46, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 274, menu_item_id: 46, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 275, menu_item_id: 46, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 276, menu_item_id: 46, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //classic milkshake
    { id: 277, menu_item_id: 47, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 278, menu_item_id: 47, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 279, menu_item_id: 47, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 280, menu_item_id: 47, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 281, menu_item_id: 47, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 282, menu_item_id: 47, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //iced coffee
    { id: 283, menu_item_id: 48, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 284, menu_item_id: 48, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 285, menu_item_id: 48, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 286, menu_item_id: 48, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 287, menu_item_id: 48, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 288, menu_item_id: 48, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //chocolate brownie sundae
    { id: 289, menu_item_id: 49, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 290, menu_item_id: 49, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 291, menu_item_id: 49, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 292, menu_item_id: 49, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 293, menu_item_id: 49, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 294, menu_item_id: 49, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //apple pie
    { id: 295, menu_item_id: 50, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 296, menu_item_id: 50, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 297, menu_item_id: 50, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 298, menu_item_id: 50, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 299, menu_item_id: 50, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 300, menu_item_id: 50, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //classic pancake stack
    { id: 301, menu_item_id: 51, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 302, menu_item_id: 51, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 303, menu_item_id: 51, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 304, menu_item_id: 51, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 305, menu_item_id: 51, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 306, menu_item_id: 51, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    // Belgian Waffle Deluxe
    { id: 307, menu_item_id: 52, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 308, menu_item_id: 52, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 309, menu_item_id: 52, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 310, menu_item_id: 52, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 311, menu_item_id: 52, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 312, menu_item_id: 52, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //denver omelette
    { id: 313, menu_item_id: 53, allergen_name: 'dairy', is_contained: true, can_be_omitted: true },
    { id: 314, menu_item_id: 53, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 315, menu_item_id: 53, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 316, menu_item_id: 53, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 317, menu_item_id: 53, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 318, menu_item_id: 53, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //vegetarian spinach omelette
    { id: 319, menu_item_id: 54, allergen_name: 'dairy', is_contained: true, can_be_omitted: true },
    { id: 320, menu_item_id: 54, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 321, menu_item_id: 54, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 322, menu_item_id: 54, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 323, menu_item_id: 54, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 324, menu_item_id: 54, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //classic BLT sandwich
    { id: 325, menu_item_id: 55, allergen_name: 'dairy', is_contained: true, can_be_omitted: true },
    { id: 326, menu_item_id: 55, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 327, menu_item_id: 55, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 328, menu_item_id: 55, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 329, menu_item_id: 55, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 330, menu_item_id: 55, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //double cheeseburger
    { id: 331, menu_item_id: 56, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 332, menu_item_id: 56, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 333, menu_item_id: 56, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 334, menu_item_id: 56, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 335, menu_item_id: 56, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 336, menu_item_id: 56, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //chicken fried gravy
    { id: 337, menu_item_id: 57, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 338, menu_item_id: 57, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 339, menu_item_id: 57, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 340, menu_item_id: 57, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 341, menu_item_id: 57, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 342, menu_item_id: 57, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //mac n cheese
    { id: 343, menu_item_id: 58, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 344, menu_item_id: 58, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 345, menu_item_id: 58, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 346, menu_item_id: 58, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 347, menu_item_id: 58, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 348, menu_item_id: 58, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //homemade apple pie
    { id: 349, menu_item_id: 59, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 350, menu_item_id: 59, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 351, menu_item_id: 59, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 352, menu_item_id: 59, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 353, menu_item_id: 59, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 354, menu_item_id: 59, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //chocolate milkshake
    { id: 355, menu_item_id: 60, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 356, menu_item_id: 60, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 357, menu_item_id: 60, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 358, menu_item_id: 60, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 359, menu_item_id: 60, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 360, menu_item_id: 60, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //guacamole and chips
    { id: 361, menu_item_id: 61, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 362, menu_item_id: 61, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 363, menu_item_id: 61, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 364, menu_item_id: 61, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 365, menu_item_id: 61, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 366, menu_item_id: 61, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //queso fundido
    { id: 367, menu_item_id: 62, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 368, menu_item_id: 62, allergen_name: 'gluten', is_contained: true, can_be_omitted: true },
    { id: 369, menu_item_id: 62, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 370, menu_item_id: 62, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 371, menu_item_id: 62, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 372, menu_item_id: 62, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //carne asada tacos
    { id: 373, menu_item_id: 63, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 374, menu_item_id: 63, allergen_name: 'gluten', is_contained: true, can_be_omitted: true },
    { id: 375, menu_item_id: 63, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 376, menu_item_id: 63, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 377, menu_item_id: 63, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 378, menu_item_id: 63, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //shrimp tacos
    { id: 379, menu_item_id: 64, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 380, menu_item_id: 64, allergen_name: 'gluten', is_contained: true, can_be_omitted: true },
    { id: 381, menu_item_id: 64, allergen_name: 'shellfish', is_contained: true, can_be_omitted: false },
    { id: 382, menu_item_id: 64, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 383, menu_item_id: 64, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 384, menu_item_id: 64, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //chicken burrito
    { id: 385, menu_item_id: 65, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 386, menu_item_id: 65, allergen_name: 'gluten', is_contained: true, can_be_omitted: true },
    { id: 387, menu_item_id: 65, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 388, menu_item_id: 65, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 389, menu_item_id: 65, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 390, menu_item_id: 65, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //vegetarian burrito
    { id: 391, menu_item_id: 66, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 392, menu_item_id: 66, allergen_name: 'gluten', is_contained: true, can_be_omitted: true },
    { id: 393, menu_item_id: 66, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 394, menu_item_id: 66, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 395, menu_item_id: 66, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 396, menu_item_id: 66, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //cheese enchilada
    { id: 397, menu_item_id: 67, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 398, menu_item_id: 67, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 399, menu_item_id: 67, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 400, menu_item_id: 67, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 401, menu_item_id: 67, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 402, menu_item_id: 67, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //beef enchilada
    { id: 403, menu_item_id: 68, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 404, menu_item_id: 68, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 405, menu_item_id: 68, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 406, menu_item_id: 68, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 407, menu_item_id: 68, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 408, menu_item_id: 68, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //Mexican street corn
    { id: 409, menu_item_id: 69, allergen_name: 'dairy', is_contained: true, can_be_omitted: true },
    { id: 410, menu_item_id: 69, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 411, menu_item_id: 69, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 412, menu_item_id: 69, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 413, menu_item_id: 69, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 414, menu_item_id: 69, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //chips and salsa
    { id: 415, menu_item_id: 70, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 416, menu_item_id: 70, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 417, menu_item_id: 70, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 418, menu_item_id: 70, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 419, menu_item_id: 70, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 420, menu_item_id: 70, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //tortilla soup
    { id: 421, menu_item_id: 71, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 422, menu_item_id: 71, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 423, menu_item_id: 71, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 424, menu_item_id: 71, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 425, menu_item_id: 71, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 426, menu_item_id: 71, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //sopa de frijoles
    { id: 427, menu_item_id: 72, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 428, menu_item_id: 72, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 429, menu_item_id: 72, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 430, menu_item_id: 72, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 431, menu_item_id: 72, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 432, menu_item_id: 72, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //mole poblano
    { id: 433, menu_item_id: 73, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 434, menu_item_id: 73, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 435, menu_item_id: 73, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 436, menu_item_id: 73, allergen_name: 'tree nuts', is_contained: true, can_be_omitted: false },
    { id: 437, menu_item_id: 73, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 438, menu_item_id: 73, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //carnitas plate
    { id: 439, menu_item_id: 74, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 440, menu_item_id: 74, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 441, menu_item_id: 74, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 442, menu_item_id: 74, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 443, menu_item_id: 74, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 444, menu_item_id: 74, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //churros with chocolate sauce
    { id: 445, menu_item_id: 75, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 446, menu_item_id: 75, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 447, menu_item_id: 75, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 448, menu_item_id: 75, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 449, menu_item_id: 75, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 450, menu_item_id: 75, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //tres leches cake
    { id: 451, menu_item_id: 76, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 452, menu_item_id: 76, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 453, menu_item_id: 76, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 454, menu_item_id: 76, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 455, menu_item_id: 76, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
    { id: 456, menu_item_id: 76, allergen_name: 'fish', is_contained: false, can_be_omitted: false },

    //horchata
    { id: 457, menu_item_id: 77, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 458, menu_item_id: 77, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 459, menu_item_id: 77, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 460, menu_item_id: 77, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 461, menu_item_id: 77, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 462, menu_item_id: 77, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //jamaica agua fresca
    { id: 463, menu_item_id: 78, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 464, menu_item_id: 78, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 465, menu_item_id: 78, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 466, menu_item_id: 78, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 467, menu_item_id: 78, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 468, menu_item_id: 78, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //queso flameado
    { id: 469, menu_item_id: 79, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 470, menu_item_id: 79, allergen_name: 'gluten', is_contained: true, can_be_omitted: true },
    { id: 471, menu_item_id: 79, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 472, menu_item_id: 79, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 473, menu_item_id: 79, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 474, menu_item_id: 79, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //taco salad
    { id: 475, menu_item_id: 80, allergen_name: 'dairy', is_contained: true, can_be_omitted: true },
    { id: 476, menu_item_id: 80, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 477, menu_item_id: 80, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 478, menu_item_id: 80, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 479, menu_item_id: 80, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 480, menu_item_id: 80, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //margherita pizza
    { id: 481, menu_item_id: 81, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 482, menu_item_id: 81, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 483, menu_item_id: 81, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 484, menu_item_id: 81, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 485, menu_item_id: 81, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 486, menu_item_id: 81, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //pepperoni feast
    { id: 487, menu_item_id: 82, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 488, menu_item_id: 82, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 489, menu_item_id: 82, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 490, menu_item_id: 82, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 491, menu_item_id: 82, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 492, menu_item_id: 82, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //vegetarian delight
    { id: 493, menu_item_id: 83, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 494, menu_item_id: 83, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 495, menu_item_id: 83, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 496, menu_item_id: 83, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 497, menu_item_id: 83, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 498, menu_item_id: 83, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //meat lovers supreme
    { id: 499, menu_item_id: 84, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 500, menu_item_id: 84, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 501, menu_item_id: 84, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 502, menu_item_id: 84, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 503, menu_item_id: 84, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 504, menu_item_id: 84, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //classic calzone
    { id: 505, menu_item_id: 85, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 506, menu_item_id: 85, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 507, menu_item_id: 85, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 508, menu_item_id: 85, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 509, menu_item_id: 85, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 510, menu_item_id: 85, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //spinach and feta calzone
    { id: 511, menu_item_id: 86, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 512, menu_item_id: 86, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 513, menu_item_id: 86, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 514, menu_item_id: 86, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 515, menu_item_id: 86, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 516, menu_item_id: 86, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //garlic knots
    { id: 517, menu_item_id: 87, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 518, menu_item_id: 87, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 519, menu_item_id: 87, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 520, menu_item_id: 87, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 521, menu_item_id: 87, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 522, menu_item_id: 87, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    // mozzarella sticks
    { id: 523, menu_item_id: 88, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 524, menu_item_id: 88, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 525, menu_item_id: 88, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 526, menu_item_id: 88, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 527, menu_item_id: 88, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 528, menu_item_id: 88, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //caprese salad
    { id: 529, menu_item_id: 89, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 530, menu_item_id: 89, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 531, menu_item_id: 89, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 532, menu_item_id: 89, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 533, menu_item_id: 89, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 534, menu_item_id: 89, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    // greek salad
    { id: 535, menu_item_id: 90, allergen_name: 'dairy', is_contained: true, can_be_omitted: true },
    { id: 536, menu_item_id: 90, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 537, menu_item_id: 90, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 538, menu_item_id: 90, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 539, menu_item_id: 90, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 540, menu_item_id: 90, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //spaghetti bolognese
    { id: 541, menu_item_id: 91, allergen_name: 'dairy', is_contained: true, can_be_omitted: true },
    { id: 542, menu_item_id: 91, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 543, menu_item_id: 91, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 544, menu_item_id: 91, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 545, menu_item_id: 91, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 546, menu_item_id: 91, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //chicken alfredo
    { id: 547, menu_item_id: 92, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 548, menu_item_id: 92, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 549, menu_item_id: 92, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 550, menu_item_id: 92, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 551, menu_item_id: 92, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 552, menu_item_id: 92, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //quattro formaggi pizza
    { id: 553, menu_item_id: 93, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 554, menu_item_id: 93, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 555, menu_item_id: 93, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 556, menu_item_id: 93, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 557, menu_item_id: 93, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 558, menu_item_id: 93, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //mushroom truffle pizza
    { id: 559, menu_item_id: 94, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 560, menu_item_id: 94, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 561, menu_item_id: 94, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 562, menu_item_id: 94, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 563, menu_item_id: 94, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 564, menu_item_id: 94, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //seafood risotto
    { id: 565, menu_item_id: 95, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 566, menu_item_id: 95, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 567, menu_item_id: 95, allergen_name: 'shellfish', is_contained: true, can_be_omitted: false },
    { id: 568, menu_item_id: 95, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 569, menu_item_id: 95, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 570, menu_item_id: 95, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //wild mushroom risotto
    { id: 571, menu_item_id: 96, allergen_name: 'dairy', is_contained: true, can_be_omitted: true },
    { id: 572, menu_item_id: 96, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 573, menu_item_id: 96, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 574, menu_item_id: 96, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 575, menu_item_id: 96, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 576, menu_item_id: 96, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //bruschetta
    { id: 577, menu_item_id: 97, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 578, menu_item_id: 97, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 579, menu_item_id: 97, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 580, menu_item_id: 97, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 581, menu_item_id: 97, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 582, menu_item_id: 97, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //caprese skewers
    { id: 583, menu_item_id: 98, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 584, menu_item_id: 98, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 585, menu_item_id: 98, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 586, menu_item_id: 98, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 587, menu_item_id: 98, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 588, menu_item_id: 98, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //tiramisu
    { id: 589, menu_item_id: 99, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 590, menu_item_id: 99, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 591, menu_item_id: 99, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 592, menu_item_id: 99, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 593, menu_item_id: 99, allergen_name: 'tree nuts', is_contained: true, can_be_omitted: false },
    { id: 594, menu_item_id: 99, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //cannoli
    { id: 595, menu_item_id: 100, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 596, menu_item_id: 100, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 597, menu_item_id: 100, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 598, menu_item_id: 100, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 599, menu_item_id: 100, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 600, menu_item_id: 100, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //quinoa buddha bowl
    { id: 601, menu_item_id: 101, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 602, menu_item_id: 101, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 603, menu_item_id: 101, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 604, menu_item_id: 101, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 605, menu_item_id: 101, allergen_name: 'tree nuts', is_contained: true, can_be_omitted: true },
    { id: 606, menu_item_id: 101, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //chickpea curry bowl
    { id: 607, menu_item_id: 102, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 608, menu_item_id: 102, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 609, menu_item_id: 102, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 610, menu_item_id: 102, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 611, menu_item_id: 102, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 612, menu_item_id: 102, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //black bean burger
    { id: 613, menu_item_id: 103, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 614, menu_item_id: 103, allergen_name: 'gluten', is_contained: true, can_be_omitted: true },
    { id: 615, menu_item_id: 103, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 616, menu_item_id: 103, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 617, menu_item_id: 103, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 618, menu_item_id: 103, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //mushroom quinoa burger
    { id: 619, menu_item_id: 104, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 620, menu_item_id: 104, allergen_name: 'gluten', is_contained: true, can_be_omitted: true },
    { id: 621, menu_item_id: 104, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 622, menu_item_id: 104, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 623, menu_item_id: 104, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 624, menu_item_id: 104, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //veggie supreme pizza
    { id: 625, menu_item_id: 105, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 626, menu_item_id: 105, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 627, menu_item_id: 105, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 628, menu_item_id: 105, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 629, menu_item_id: 105, allergen_name: 'tree nuts', is_contained: true, can_be_omitted: false },
    { id: 630, menu_item_id: 105, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //pesto zuddle pizza
    { id: 631, menu_item_id: 106, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 632, menu_item_id: 106, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 633, menu_item_id: 106, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 634, menu_item_id: 106, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 635, menu_item_id: 106, allergen_name: 'tree nuts', is_contained: true, can_be_omitted: false },
    { id: 636, menu_item_id: 106, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //falafel wrap
    { id: 637, menu_item_id: 107, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 638, menu_item_id: 107, allergen_name: 'gluten', is_contained: true, can_be_omitted: true },
    { id: 639, menu_item_id: 107, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 640, menu_item_id: 107, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 641, menu_item_id: 107, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 642, menu_item_id: 107, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //avocado and bean wrap
    { id: 643, menu_item_id: 108, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 644, menu_item_id: 108, allergen_name: 'gluten', is_contained: true, can_be_omitted: true },
    { id: 645, menu_item_id: 108, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 646, menu_item_id: 108, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 647, menu_item_id: 108, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 648, menu_item_id: 108, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //vegan chocolate cake
    { id: 649, menu_item_id: 109, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 650, menu_item_id: 109, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 651, menu_item_id: 109, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 652, menu_item_id: 109, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 653, menu_item_id: 109, allergen_name: 'tree nuts', is_contained: true, can_be_omitted: false },
    { id: 654, menu_item_id: 109, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //coconut mango sorbet
    { id: 655, menu_item_id: 110, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 656, menu_item_id: 110, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 657, menu_item_id: 110, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 658, menu_item_id: 110, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 659, menu_item_id: 110, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 660, menu_item_id: 110, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //acai berry bowl
    { id: 661, menu_item_id: 111, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 662, menu_item_id: 111, allergen_name: 'gluten', is_contained: true, can_be_omitted: true },
    { id: 663, menu_item_id: 111, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 664, menu_item_id: 111, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 665, menu_item_id: 111, allergen_name: 'tree nuts', is_contained: true, can_be_omitted: true },
    { id: 666, menu_item_id: 111, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //quinoa power bowl
    { id: 667, menu_item_id: 112, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 668, menu_item_id: 112, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 669, menu_item_id: 112, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 670, menu_item_id: 112, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 671, menu_item_id: 112, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 672, menu_item_id: 112, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //mango avocado salad
    { id: 673, menu_item_id: 113, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 674, menu_item_id: 113, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 675, menu_item_id: 113, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 676, menu_item_id: 113, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 677, menu_item_id: 113, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 678, menu_item_id: 113, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //superfood caesar salad
    { id: 679, menu_item_id: 114, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 680, menu_item_id: 114, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 681, menu_item_id: 114, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 682, menu_item_id: 114, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 683, menu_item_id: 114, allergen_name: 'tree nuts', is_contained: true, can_be_omitted: true },
    { id: 684, menu_item_id: 114, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //grilled chicken power plate
    { id: 685, menu_item_id: 115, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 686, menu_item_id: 115, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 687, menu_item_id: 115, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 688, menu_item_id: 115, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 689, menu_item_id: 115, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 690, menu_item_id: 115, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //salmon and avocado wrap
    { id: 691, menu_item_id: 116, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 692, menu_item_id: 116, allergen_name: 'gluten', is_contained: true, can_be_omitted: true },
    { id: 693, menu_item_id: 116, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 694, menu_item_id: 116, allergen_name: 'fish', is_contained: true, can_be_omitted: false },
    { id: 695, menu_item_id: 116, allergen_name: 'tree nuts', is_contained: true, can_be_omitted: true },
    { id: 696, menu_item_id: 116, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //vegetable hummus wrap
    { id: 697, menu_item_id: 117, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 698, menu_item_id: 117, allergen_name: 'gluten', is_contained: true, can_be_omitted: true },
    { id: 699, menu_item_id: 117, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 700, menu_item_id: 117, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 701, menu_item_id: 117, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 702, menu_item_id: 117, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //turkey and quinoa wrap
    { id: 703, menu_item_id: 118, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 704, menu_item_id: 118, allergen_name: 'gluten', is_contained: true, can_be_omitted: true },
    { id: 705, menu_item_id: 118, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 706, menu_item_id: 118, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 707, menu_item_id: 118, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 708, menu_item_id: 118, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //chia seed pudding
    { id: 709, menu_item_id: 119, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 710, menu_item_id: 119, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 711, menu_item_id: 119, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 712, menu_item_id: 119, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 713, menu_item_id: 119, allergen_name: 'tree nuts', is_contained: true, can_be_omitted: false },
    { id: 714, menu_item_id: 119, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //roasted chickpeas
    { id: 715, menu_item_id: 120, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 716, menu_item_id: 120, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 717, menu_item_id: 120, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 718, menu_item_id: 120, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 719, menu_item_id: 120, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 720, menu_item_id: 120, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //hummus trio
    { id: 721, menu_item_id: 121, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 722, menu_item_id: 121, allergen_name: 'gluten', is_contained: true, can_be_omitted: true },
    { id: 723, menu_item_id: 121, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 724, menu_item_id: 121, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 725, menu_item_id: 121, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 726, menu_item_id: 121, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //falafel platter
    { id: 727, menu_item_id: 122, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 728, menu_item_id: 122, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 729, menu_item_id: 122, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 730, menu_item_id: 122, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 731, menu_item_id: 122, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 732, menu_item_id: 122, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //chicken souvlaki skewers
    { id: 733, menu_item_id: 123, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 734, menu_item_id: 123, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 735, menu_item_id: 123, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 736, menu_item_id: 123, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 737, menu_item_id: 123, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 738, menu_item_id: 123, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //beef kebab plate
    { id: 739, menu_item_id: 124, allergen_name: 'dairy', is_contained: true, can_be_omitted: true },
    { id: 740, menu_item_id: 124, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 741, menu_item_id: 124, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 742, menu_item_id: 124, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 743, menu_item_id: 124, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 744, menu_item_id: 124, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //greek salad
    { id: 745, menu_item_id: 125, allergen_name: 'dairy', is_contained: true, can_be_omitted: true },
    { id: 746, menu_item_id: 125, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 747, menu_item_id: 125, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 748, menu_item_id: 125, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 749, menu_item_id: 125, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 750, menu_item_id: 125, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //mediterranean quinoa salad
    { id: 751, menu_item_id: 126, allergen_name: 'dairy', is_contained: true, can_be_omitted: true },
    { id: 752, menu_item_id: 126, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 753, menu_item_id: 126, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 754, menu_item_id: 126, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 755, menu_item_id: 126, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 756, menu_item_id: 126, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //vegetarian pita pocket
    { id: 757, menu_item_id: 127, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 758, menu_item_id: 127, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 759, menu_item_id: 127, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 760, menu_item_id: 127, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 761, menu_item_id: 127, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 762, menu_item_id: 127, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //lamb gyro wrap
    { id: 763, menu_item_id: 128, allergen_name: 'dairy', is_contained: true, can_be_omitted: true },
    { id: 764, menu_item_id: 128, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 765, menu_item_id: 128, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 766, menu_item_id: 128, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 767, menu_item_id: 128, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 768, menu_item_id: 128, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //stuffed grape leaves
    { id: 769, menu_item_id: 129, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 770, menu_item_id: 129, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 771, menu_item_id: 129, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 772, menu_item_id: 129, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 773, menu_item_id: 129, allergen_name: 'tree nuts', is_contained: true, can_be_omitted: false },
    { id: 774, menu_item_id: 129, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //moussaka
    { id: 775, menu_item_id: 130, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 776, menu_item_id: 130, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 777, menu_item_id: 130, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 778, menu_item_id: 130, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 779, menu_item_id: 130, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 780, menu_item_id: 130, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //mezze platter
    { id: 781, menu_item_id: 131, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 782, menu_item_id: 131, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 783, menu_item_id: 131, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 784, menu_item_id: 131, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 785, menu_item_id: 131, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 786, menu_item_id: 131, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //lentil soup
    { id: 787, menu_item_id: 132, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 788, menu_item_id: 132, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 789, menu_item_id: 132, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 790, menu_item_id: 132, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 791, menu_item_id: 132, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 792, menu_item_id: 132, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //grilled octopus
    { id: 793, menu_item_id: 133, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 794, menu_item_id: 133, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 795, menu_item_id: 133, allergen_name: 'shellfish', is_contained: true, can_be_omitted: false },
    { id: 796, menu_item_id: 133, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 797, menu_item_id: 133, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 798, menu_item_id: 133, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //lamb kofta skewers
    { id: 799, menu_item_id: 134, allergen_name: 'dairy', is_contained: true, can_be_omitted: true },
    { id: 800, menu_item_id: 134, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 801, menu_item_id: 134, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 802, menu_item_id: 134, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 803, menu_item_id: 134, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 804, menu_item_id: 134, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //tabbouleh salad
    { id: 805, menu_item_id: 135, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 806, menu_item_id: 135, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 807, menu_item_id: 135, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 808, menu_item_id: 135, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 809, menu_item_id: 135, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 810, menu_item_id: 135, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //fattoush salad
    { id: 811, menu_item_id: 136, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 812, menu_item_id: 136, allergen_name: 'gluten', is_contained: true, can_be_omitted: true },
    { id: 813, menu_item_id: 136, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 814, menu_item_id: 136, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 815, menu_item_id: 136, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 816, menu_item_id: 136, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //falafel wrap
    { id: 817, menu_item_id: 137, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 818, menu_item_id: 137, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 819, menu_item_id: 137, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 820, menu_item_id: 137, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 821, menu_item_id: 137, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 822, menu_item_id: 137, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //shawarma wrap
    { id: 823, menu_item_id: 138, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 824, menu_item_id: 138, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 825, menu_item_id: 138, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 826, menu_item_id: 138, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 827, menu_item_id: 138, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 828, menu_item_id: 138, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //dolma
    { id: 829, menu_item_id: 139, allergen_name: 'dairy', is_contained: false, can_be_omitted: false },
    { id: 830, menu_item_id: 139, allergen_name: 'gluten', is_contained: false, can_be_omitted: false },
    { id: 831, menu_item_id: 139, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 832, menu_item_id: 139, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 833, menu_item_id: 139, allergen_name: 'tree nuts', is_contained: true, can_be_omitted: false },
    { id: 834, menu_item_id: 139, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },

    //spanakopita
    { id: 835, menu_item_id: 140, allergen_name: 'dairy', is_contained: true, can_be_omitted: false },
    { id: 836, menu_item_id: 140, allergen_name: 'gluten', is_contained: true, can_be_omitted: false },
    { id: 837, menu_item_id: 140, allergen_name: 'shellfish', is_contained: false, can_be_omitted: false },
    { id: 838, menu_item_id: 140, allergen_name: 'fish', is_contained: false, can_be_omitted: false },
    { id: 839, menu_item_id: 140, allergen_name: 'tree nuts', is_contained: false, can_be_omitted: false },
    { id: 840, menu_item_id: 140, allergen_name: 'peanuts', is_contained: false, can_be_omitted: false },
  ]);
};
