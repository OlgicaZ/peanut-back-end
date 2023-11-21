exports.seed = async function (knex) {

  await knex('business_hours').del()
  await knex('business_hours').insert([

    //Sushi Haven
    { id: 1, restaurant_id: 1, day: 1, open_time: '11:00:00', close_time: '23:00:00' },
    { id: 2, restaurant_id: 1, day: 2, open_time: '11:00:00', close_time: '23:00:00' },
    { id: 3, restaurant_id: 1, day: 3, open_time: '11:00:00', close_time: '23:00:00' },
    { id: 4, restaurant_id: 1, day: 4, open_time: '11:00:00', close_time: '23:00:00' },
    { id: 5, restaurant_id: 1, day: 5, open_time: '11:00:00', close_time: '23:00:00' },
    { id: 6, restaurant_id: 1, day: 6, open_time: '11:00:00', close_time: '23:00:00' },
    { id: 7, restaurant_id: 1, day: 7, open_time: '11:00:00', close_time: '23:00:00' },

    //Tokyo Delights
    { id: 8,  restaurant_id: 2, day: 1, open_time: '18:00:00', close_time: '23:00:00' },
    { id: 9,  restaurant_id: 2, day: 2, open_time: '18:00:00', close_time: '23:00:00' },
    { id: 10, restaurant_id: 2, day: 3, open_time: '18:00:00', close_time: '23:00:00' },
    { id: 11, restaurant_id: 2, day: 4, open_time: '18:00:00', close_time: '23:00:00' },
    { id: 12, restaurant_id: 2, day: 5, open_time: '18:00:00', close_time: '23:00:00' },
    { id: 13, restaurant_id: 2, day: 6, open_time: '18:00:00', close_time: '23:00:00' },
    { id: 14, restaurant_id: 2, day: 7, open_time: '18:00:00', close_time: '23:00:00' },

    //Curry Palace
    { id: 15, restaurant_id: 3, day: 1, open_time: '10:00:00', close_time: '22:00:00' },
    { id: 16, restaurant_id: 3, day: 2, open_time: '10:00:00', close_time: '22:00:00' },
    { id: 17, restaurant_id: 3, day: 3, open_time: '10:00:00', close_time: '22:00:00' },
    { id: 18, restaurant_id: 3, day: 4, open_time: '10:00:00', close_time: '22:00:00' },
    { id: 19, restaurant_id: 3, day: 5, open_time: '10:00:00', close_time: '22:00:00' },
    { id: 20, restaurant_id: 3, day: 6, open_time: '10:00:00', close_time: '22:00:00' },
    { id: 21, restaurant_id: 3, day: 7, open_time: '10:00:00', close_time: '22:00:00' },

    //Spice Kingdom
    { id: 22, restaurant_id: 4, day: 1, open_time: '12:00:00', close_time: '22:00:00' },
    { id: 23, restaurant_id: 4, day: 2, open_time: '12:00:00', close_time: '22:00:00' },
    { id: 24, restaurant_id: 4, day: 3, open_time: '12:00:00', close_time: '22:00:00' },
    { id: 25, restaurant_id: 4, day: 4, open_time: '12:00:00', close_time: '22:00:00' },
    { id: 26, restaurant_id: 4, day: 5, open_time: '12:00:00', close_time: '22:00:00' },
    { id: 27, restaurant_id: 4, day: 6, open_time: '11:00:00', close_time: '23:00:00' },
    { id: 28, restaurant_id: 4, day: 7, open_time: '11:00:00', close_time: '23:00:00' },

    //Burger Bliss
    { id: 29, restaurant_id: 5, day: 1, open_time: '10:00:00', close_time: '00:00:00' },
    { id: 30, restaurant_id: 5, day: 2, open_time: '10:00:00', close_time: '00:00:00' },
    { id: 31, restaurant_id: 5, day: 3, open_time: '10:00:00', close_time: '00:00:00' },
    { id: 32, restaurant_id: 5, day: 4, open_time: '10:00:00', close_time: '00:00:00' },
    { id: 33, restaurant_id: 5, day: 5, open_time: '10:00:00', close_time: '02:00:00' },
    { id: 34, restaurant_id: 5, day: 6, open_time: '10:00:00', close_time: '02:00:00' },
    { id: 35, restaurant_id: 5, day: 7, open_time: '10:00:00', close_time: '10:00:00' },

    //Classic Diner Delight
    { id: 36, restaurant_id: 6, day: 1, open_time: '06:00:00', close_time: '02:00:00' },
    { id: 37, restaurant_id: 6, day: 2, open_time: '06:00:00', close_time: '02:00:00' },
    { id: 38, restaurant_id: 6, day: 3, open_time: '06:00:00', close_time: '02:00:00' },
    { id: 39, restaurant_id: 6, day: 4, open_time: '06:00:00', close_time: '02:00:00' },
    { id: 40, restaurant_id: 6, day: 5, open_time: '06:00:00', close_time: '02:00:00' },
    { id: 41, restaurant_id: 6, day: 6, open_time: '06:00:00', close_time: '02:00:00' },
    { id: 42, restaurant_id: 6, day: 7, open_time: '06:00:00', close_time: '02:00:00' },

    //Taco Fiesta
    { id: 43, restaurant_id: 7, day: 1, open_time: '11:00:00', close_time: '23:00:00' },
    { id: 44, restaurant_id: 7, day: 2, open_time: '11:00:00', close_time: '23:00:00' },
    { id: 45, restaurant_id: 7, day: 3, open_time: '11:00:00', close_time: '23:00:00' },
    { id: 46, restaurant_id: 7, day: 4, open_time: '11:00:00', close_time: '23:00:00' },
    { id: 47, restaurant_id: 7, day: 5, open_time: '10:00:00', close_time: '00:00:00' },
    { id: 48, restaurant_id: 7, day: 6, open_time: '10:00:00', close_time: '00:00:00' },
    { id: 49, restaurant_id: 7, day: 7, open_time: '11:00:00', close_time: '23:00:00' },

    //Spicy Salsa
    { id: 50, restaurant_id: 8, day: 1, open_time: '11:00:00', close_time: '23:00:00' },
    { id: 51, restaurant_id: 8, day: 2, open_time: '11:00:00', close_time: '23:00:00' },
    { id: 52, restaurant_id: 8, day: 3, open_time: '11:00:00', close_time: '23:00:00' },
    { id: 53, restaurant_id: 8, day: 4, open_time: '11:00:00', close_time: '23:00:00' },
    { id: 54, restaurant_id: 8, day: 5, open_time: '11:00:00', close_time: '23:00:00' },
    { id: 55, restaurant_id: 8, day: 6, open_time: '11:00:00', close_time: '23:00:00' },
    { id: 56, restaurant_id: 8, day: 7, open_time: '11:00:00', close_time: '23:00:00' },

    //Pizza Palace
    { id: 57, restaurant_id: 9, day: 1, open_time: '11:00:00', close_time: '23:00:00' },
    { id: 58, restaurant_id: 9, day: 2, open_time: '11:00:00', close_time: '23:00:00' },
    { id: 59, restaurant_id: 9, day: 3, open_time: '11:00:00', close_time: '23:00:00' },
    { id: 60, restaurant_id: 9, day: 4, open_time: '11:00:00', close_time: '23:00:00' },
    { id: 61, restaurant_id: 9, day: 5, open_time: '11:00:00', close_time: '23:00:00' },
    { id: 62, restaurant_id: 9, day: 6, open_time: '11:00:00', close_time: '23:00:00' },
    { id: 63, restaurant_id: 9, day: 7, open_time: '11:00:00', close_time: '23:00:00' },

    //Pasta Paradise
    { id: 64, restaurant_id: 10, day: 1, open_time: '17:00:00', close_time: '23:00:00' },
    { id: 65, restaurant_id: 10, day: 2, open_time: '17:00:00', close_time: '23:00:00' },
    { id: 66, restaurant_id: 10, day: 3, open_time: '17:00:00', close_time: '23:00:00' },
    { id: 67, restaurant_id: 10, day: 4, open_time: '17:00:00', close_time: '23:00:00' },
    { id: 68, restaurant_id: 10, day: 5, open_time: '17:00:00', close_time: '23:00:00' },
    { id: 69, restaurant_id: 10, day: 6, open_time: '17:00:00', close_time: '23:00:00' },
    { id: 70, restaurant_id: 10, day: 7, open_time: '17:00:00', close_time: '23:00:00' },

    //Vegan Vibes
    { id: 71, restaurant_id: 11, day: 1, open_time: '08:00:00', close_time: '17:00:00' },
    { id: 72, restaurant_id: 11, day: 2, open_time: '08:00:00', close_time: '17:00:00' },
    { id: 73, restaurant_id: 11, day: 3, open_time: '08:00:00', close_time: '17:00:00' },
    { id: 74, restaurant_id: 11, day: 4, open_time: '08:00:00', close_time: '17:00:00' },
    { id: 75, restaurant_id: 11, day: 5, open_time: '08:00:00', close_time: '17:00:00' },
    { id: 76, restaurant_id: 11, day: 6, open_time: '08:00:00', close_time: '17:00:00' },
    { id: 77, restaurant_id: 11, day: 7, open_time: '08:00:00', close_time: '17:00:00' },

    //Healthy Bites
    { id: 78, restaurant_id: 12, day: 1, open_time: '10:00:00', close_time: '20:00:00' },
    { id: 79, restaurant_id: 12, day: 2, open_time: '10:00:00', close_time: '20:00:00' },
    { id: 80, restaurant_id: 12, day: 3, open_time: '10:00:00', close_time: '20:00:00' },
    { id: 81, restaurant_id: 12, day: 4, open_time: '10:00:00', close_time: '20:00:00' },
    { id: 82, restaurant_id: 12, day: 5, open_time: '10:00:00', close_time: '20:00:00' },
    { id: 83, restaurant_id: 12, day: 6, open_time: '10:00:00', close_time: '20:00:00' },
    { id: 84, restaurant_id: 12, day: 7, open_time: '10:00:00', close_time: '20:00:00' },

    //Mediterranean Delight
    { id: 85, restaurant_id: 13, day: 1, open_time: '11:00:00', close_time: '23:00:00' },
    { id: 86, restaurant_id: 13, day: 2, open_time: '11:00:00', close_time: '23:00:00' },
    { id: 87, restaurant_id: 13, day: 3, open_time: '11:00:00', close_time: '23:00:00' },
    { id: 88, restaurant_id: 13, day: 4, open_time: '11:00:00', close_time: '23:00:00' },
    { id: 89, restaurant_id: 13, day: 5, open_time: '11:00:00', close_time: '23:00:00' },
    { id: 90, restaurant_id: 13, day: 6, open_time: '11:00:00', close_time: '23:00:00' },
    { id: 91, restaurant_id: 13, day: 7, open_time: '11:00:00', close_time: '23:00:00' },

    //The Oasis
    { id: 92, restaurant_id: 14, day: 1, open_time: '18:00:00', close_time: '00:00:00' },
    { id: 93, restaurant_id: 14, day: 2, open_time: '18:00:00', close_time: '00:00:00' },
    { id: 94, restaurant_id: 14, day: 3, open_time: '18:00:00', close_time: '00:00:00' },
    { id: 95, restaurant_id: 14, day: 4, open_time: '18:00:00', close_time: '00:00:00' },
    { id: 96, restaurant_id: 14, day: 5, open_time: '18:00:00', close_time: '02:00:00' },
    { id: 97, restaurant_id: 14, day: 6, open_time: '18:00:00', close_time: '02:00:00' },
    { id: 98, restaurant_id: 14, day: 7, open_time: '18:00:00', close_time: '00:00:00' },
  ]);
};
