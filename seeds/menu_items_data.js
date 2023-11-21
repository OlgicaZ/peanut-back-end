exports.seed = async function (knex) {

  await knex('menu_items').del()
  await knex('menu_items').insert([

    //Sushi Haven
    { id: 1, restaurant_id: 1, menu_item_name: 'Nigiri Sampler', description: 'Assorted nigiri sushi', price: 15.99, category: 'Sushi' },
    { id: 2, restaurant_id: 1, menu_item_name: 'Dragon Roll', description: 'Shrimp tempura, eel, avocado', price: 18.99, category: 'Rolls' },
    { id: 3, restaurant_id: 1, menu_item_name: 'Sashimi Platter', description: 'Fresh slices of raw fish', price: 22.99, category: 'Sushi' },
    { id: 4, restaurant_id: 1, menu_item_name: 'Tempura Udon', description: 'Udon noodles with tempura', price: 12.99, category: 'Noodles' },
    { id: 5, restaurant_id: 1, menu_item_name: 'Miso Soup', description: 'Traditional Japanese soup', price: 4.99, category: 'Soups' },
    { id: 6, restaurant_id: 1, menu_item_name: 'Edamame', description: 'Steamed soybeans with sea salt', price: 6.99, category: 'Appetizers' },
    { id: 7, restaurant_id: 1, menu_item_name: 'Green Tea Ice Cream', description: 'Matcha-flavored ice cream', price: 8.99, category: 'Desserts' },
    { id: 8, restaurant_id: 1, menu_item_name: 'Japanese Whisky Flight', description: 'Sampler of Japanese whiskies', price: 24.99, category: 'Drinks' },
    { id: 9, restaurant_id: 1, menu_item_name: 'Mango Tango Roll', description: 'Mango, avocado, and spicy tuna', price: 16.99, category: 'Rolls' },
    { id: 10, restaurant_id: 1, menu_item_name: 'Chirashi Bowl', description: 'Assorted sashimi over sushi rice', price: 20.99, category: 'Bowls' },

    //Tokyo Delights
    { id: 11, restaurant_id: 2, menu_item_name: 'Sashimi Platter', description: 'Fresh slices of raw fish', price: 22.99, category: 'Sushi' },
    { id: 12, restaurant_id: 2, menu_item_name: 'Rainbow Roll', description: 'Assorted fish on a California roll', price: 20.99, category: 'Sushi' },
    { id: 13, restaurant_id: 2, menu_item_name: 'Spicy Salmon Roll', description: 'Spicy salmon, avocado, cucumber', price: 16.99, category: 'Rolls' },
    { id: 14, restaurant_id: 2, menu_item_name: 'Caterpillar Roll', description: 'Eel, avocado, eel sauce', price: 18.99, category: 'Rolls' },
    { id: 15, restaurant_id: 2, menu_item_name: 'Yakisoba Stir-Fry', description: 'Stir-fried noodles with vegetables', price: 14.99, category: 'Noodles' },
    { id: 16, restaurant_id: 2, menu_item_name: 'Zaru Soba', description: 'Cold buckwheat noodles with dipping sauce', price: 12.99, category: 'Noodles' },
    { id: 17, restaurant_id: 2, menu_item_name: 'Udon Miso Soup', description: 'Udon noodles in miso broth', price: 10.99, category: 'Soups' },
    { id: 18, restaurant_id: 2, menu_item_name: 'Clam Miso Soup', description: 'Miso soup with fresh clams', price: 12.99, category: 'Soups' },
    { id: 19, restaurant_id: 2, menu_item_name: 'Takoyaki', description: 'Octopus-filled savory balls', price: 8.99, category: 'Appetizers' },
    { id: 20, restaurant_id: 2, menu_item_name: 'Soft Shell Crab', description: 'Deep-fried soft shell crab', price: 14.99, category: 'Appetizers' },

    //Curry Palace
    { id: 21, restaurant_id: 3, menu_item_name: 'Samosas', description: 'Crispy pastry filled with spiced potatoes and peas', price: 7.99, category: 'Appetizers' },
    { id: 22, restaurant_id: 3, menu_item_name: 'Vegetable Pakora', description: 'Assorted vegetables deep-fried in chickpea batter', price: 6.99, category: 'Appetizers' },
    { id: 23, restaurant_id: 3, menu_item_name: 'Garlic Naan', description: 'Flatbread topped with garlic and butter', price: 3.99, category: 'Breads' },
    { id: 24, restaurant_id: 3, menu_item_name: 'Aloo Paratha', description: 'Whole wheat bread stuffed with spiced potatoes', price: 5.99, category: 'Breads' },
    { id: 25, restaurant_id: 3, menu_item_name: 'Chicken Tikka Masala', description: 'Grilled chicken in creamy tomato curry sauce', price: 14.99, category: 'Curries' },
    { id: 26, restaurant_id: 3, menu_item_name: 'Vegetable Korma', description: 'Assorted vegetables in a rich and flavorful coconut sauce', price: 12.99, category: 'Curries' },
    { id: 27, restaurant_id: 3, menu_item_name: 'Chicken Biryani', description: 'Fragrant basmati rice with chicken and aromatic spices', price: 16.99, category: 'Biryanis' },
    { id: 28, restaurant_id: 3, menu_item_name: 'Vegetable Biryani', description: 'Mixed vegetables layered with basmati rice and biryani spices', price: 13.99, category: 'Biryanis' },
    { id: 29, restaurant_id: 3, menu_item_name: 'Gulab Jamun', description: 'Sweet milk dumplings soaked in rose-flavored sugar syrup', price: 5.99, category: 'Desserts' },
    { id: 30, restaurant_id: 3, menu_item_name: 'Kheer', description: 'Creamy rice pudding with cardamom and nuts', price: 4.99, category: 'Desserts' },

    //Spice Kingdom
    { id: 31, restaurant_id: 4, menu_item_name: 'Paneer Tikka', description: 'Grilled cottage cheese marinated in spices', price: 8.99, category: 'Appetizers' },
    { id: 32, restaurant_id: 4, menu_item_name: 'Bhajiya', description: 'Crispy fritters made with gram flour and spices', price: 7.99, category: 'Appetizers' },
    { id: 33, restaurant_id: 4, menu_item_name: 'Roti', description: 'Whole wheat unleavened flatbread', price: 2.99, category: 'Breads' },
    { id: 34, restaurant_id: 4, menu_item_name: 'Peshawari Naan', description: 'Naan filled with nuts and dried fruits', price: 4.99, category: 'Breads' },
    { id: 35, restaurant_id: 4, menu_item_name: 'Butter Chicken', description: 'Tender chicken in a rich and creamy tomato sauce', price: 15.99, category: 'Curries' },
    { id: 36, restaurant_id: 4, menu_item_name: 'Palak Paneer', description: 'Cottage cheese cubes in a spinach-based curry', price: 13.99, category: 'Curries' },
    { id: 37, restaurant_id: 4, menu_item_name: 'Vegetable Dum Biryani', description: 'Mixed vegetables cooked with basmati rice and aromatic spices', price: 14.99, category: 'Biryanis' },
    { id: 38, restaurant_id: 4, menu_item_name: 'Chicken Hyderabadi Biryani', description: 'Flavorful chicken and basmati rice with Hyderabadi spices', price: 17.99, category: 'Biryanis' },
    { id: 39, restaurant_id: 4, menu_item_name: 'Rasgulla', description: 'Soft and spongy cottage cheese balls in sugar syrup', price: 6.99, category: 'Desserts' },
    { id: 40, restaurant_id: 4, menu_item_name: 'Mango Lassi', description: 'Refreshing yogurt-based drink with mango pulp', price: 4.99, category: 'Beverages' },

    //Burger Bliss
    { id: 41, restaurant_id: 5, menu_item_name: 'Classic Cheeseburger', description: 'Juicy beef patty with cheddar cheese', price: 9.99, category: 'Burgers' },
    { id: 42, restaurant_id: 5, menu_item_name: 'Bacon BBQ Burger', description: 'Beef burger topped with crispy bacon and BBQ sauce', price: 11.99, category: 'Burgers' },
    { id: 43, restaurant_id: 5, menu_item_name: 'Grilled Chicken Club', description: 'Grilled chicken, bacon, lettuce, and tomato', price: 10.99, category: 'Sandwiches' },
    { id: 44, restaurant_id: 5, menu_item_name: 'Veggie Delight Wrap', description: 'Assorted vegetables in a whole wheat wrap', price: 8.99, category: 'Wraps' },
    { id: 45, restaurant_id: 5, menu_item_name: 'Crispy Onion Rings', description: 'Golden-fried onion rings with a crunchy coating', price: 5.99, category: 'Sides' },
    { id: 46, restaurant_id: 5, menu_item_name: 'Sweet Potato Fries', description: 'Thin-cut sweet potato fries served with dipping sauce', price: 6.99, category: 'Sides' },
    { id: 47, restaurant_id: 5, menu_item_name: 'Classic Milkshake', description: 'Vanilla milkshake topped with whipped cream', price: 4.99, category: 'Shakes' },
    { id: 48, restaurant_id: 5, menu_item_name: 'Iced Coffee', description: 'Cold brew coffee served over ice', price: 3.99, category: 'Beverages' },
    { id: 49, restaurant_id: 5, menu_item_name: 'Chocolate Brownie Sundae', description: 'Warm chocolate brownie topped with vanilla ice cream', price: 7.99, category: 'Desserts' },
    { id: 50, restaurant_id: 5, menu_item_name: 'Apple Pie Slice', description: 'Classic American apple pie served with a scoop of ice cream', price: 6.99, category: 'Desserts' },

    //Classic Diner Delight
    { id: 51, restaurant_id: 6, menu_item_name: 'Classic Pancake Stack', description: 'Fluffy pancakes served with maple syrup', price: 8.99, category: 'Breakfast' },
    { id: 52, restaurant_id: 6, menu_item_name: 'Belgian Waffle Deluxe', description: 'Golden Belgian waffle topped with fresh berries and whipped cream', price: 10.99, category: 'Breakfast' },
    { id: 53, restaurant_id: 6, menu_item_name: 'Denver Omelette', description: 'Ham, bell peppers, onions, and cheese', price: 9.99, category: 'Omelettes' },
    { id: 54, restaurant_id: 6, menu_item_name: 'Vegetarian Spinach Omelette', description: 'Fresh spinach, tomatoes, mushrooms, and feta cheese', price: 8.99, category: 'Omelettes' },
    { id: 55, restaurant_id: 6, menu_item_name: 'Classic BLT Sandwich', description: 'Bacon, lettuce, and tomato on toasted bread', price: 7.99, category: 'Sandwiches' },
    { id: 56, restaurant_id: 6, menu_item_name: 'Double Cheeseburger', description: 'Two beef patties with American cheese', price: 11.99, category: 'Burgers' },
    { id: 57, restaurant_id: 6, menu_item_name: 'Chicken Fried Steak', description: 'Breaded and fried steak with country gravy', price: 12.99, category: 'Entrees' },
    { id: 58, restaurant_id: 6, menu_item_name: 'Mac \'n\' Cheese', description: 'Creamy macaroni and cheese with a golden crust', price: 9.99, category: 'Sides' },
    { id: 59, restaurant_id: 6, menu_item_name: 'Homemade Apple Pie', description: 'Warm apple pie with a flaky crust', price: 6.99, category: 'Desserts' },
    { id: 60, restaurant_id: 6, menu_item_name: 'Chocolate Milkshake', description: 'Rich chocolate milkshake with whipped cream', price: 4.99, category: 'Shakes' },

    //Taco Fiesta
    { id: 61, restaurant_id: 7, menu_item_name: 'Guacamole and Chips', description: 'Freshly made guacamole served with crispy tortilla chips', price: 7.99, category: 'Appetizers' },
    { id: 62, restaurant_id: 7, menu_item_name: 'Queso Fundido', description: 'Melted cheese with chorizo, served with warm tortillas', price: 8.99, category: 'Appetizers' },
    { id: 63, restaurant_id: 7, menu_item_name: 'Carne Asada Tacos', description: 'Grilled steak tacos with onions and cilantro', price: 9.99, category: 'Tacos' },
    { id: 64, restaurant_id: 7, menu_item_name: 'Shrimp Tacos', description: 'Sauteed shrimp with cabbage slaw and chipotle mayo', price: 10.99, category: 'Tacos' },
    { id: 65, restaurant_id: 7, menu_item_name: 'Chicken Burrito', description: 'Grilled chicken, rice, beans, and salsa wrapped in a flour tortilla', price: 11.99, category: 'Burritos' },
    { id: 66, restaurant_id: 7, menu_item_name: 'Vegetarian Burrito', description: 'Black beans, rice, grilled veggies, and guacamole', price: 10.99, category: 'Burritos' },
    { id: 67, restaurant_id: 7, menu_item_name: 'Cheese Enchiladas', description: 'Enchiladas filled with melted cheese, topped with red sauce', price: 8.99, category: 'Enchiladas' },
    { id: 68, restaurant_id: 7, menu_item_name: 'Beef Enchiladas', description: 'Shredded beef enchiladas with green chili sauce', price: 12.99, category: 'Enchiladas' },
    { id: 69, restaurant_id: 7, menu_item_name: 'Mexican Street Corn', description: 'Grilled corn on the cob with cotija cheese and chili powder', price: 5.99, category: 'Sides' },
    { id: 70, restaurant_id: 7, menu_item_name: 'Chips and Salsa', description: 'Traditional salsa served with tortilla chips', price: 4.99, category: 'Sides' },

    //Spicy Salsa
    { id: 71, restaurant_id: 8, menu_item_name: 'Tortilla Soup', description: 'Hearty soup with chicken, vegetables, and crispy tortilla strips', price: 6.99, category: 'Soups' },
    { id: 72, restaurant_id: 8, menu_item_name: 'Sopa de Frijoles', description: 'Black bean soup with bacon, onions, and cilantro', price: 5.99, category: 'Soups' },
    { id: 73, restaurant_id: 8, menu_item_name: 'Mole Poblano', description: 'Chicken smothered in rich mole sauce, served with rice and tortillas', price: 14.99, category: 'Main Courses' },
    { id: 74, restaurant_id: 8, menu_item_name: 'Carnitas Plate', description: 'Slow-cooked pork served with rice, beans, and salsa', price: 13.99, category: 'Main Courses' },
    { id: 75, restaurant_id: 8, menu_item_name: 'Churros with Chocolate Sauce', description: 'Crispy fried dough, dusted with cinnamon sugar, served with chocolate dipping sauce', price: 7.99, category: 'Desserts' },
    { id: 76, restaurant_id: 8, menu_item_name: 'Tres Leches Cake', description: 'Moist sponge cake soaked in three types of milk, topped with whipped cream', price: 8.99, category: 'Desserts' },
    { id: 77, restaurant_id: 8, menu_item_name: 'Horchata', description: 'Sweet rice milk infused with cinnamon and vanilla', price: 3.99, category: 'Beverages' },
    { id: 78, restaurant_id: 8, menu_item_name: 'Jamaica Agua Fresca', description: 'Hibiscus-infused refreshing drink', price: 4.99, category: 'Beverages' },
    { id: 79, restaurant_id: 8, menu_item_name: 'Queso Flameado', description: 'Melted cheese flambéed with chorizo, served with tortillas', price: 10.99, category: 'Specialties' },
    { id: 80, restaurant_id: 8, menu_item_name: 'Taco Salad', description: 'Crispy tortilla bowl filled with lettuce, beans, cheese, and choice of meat', price: 11.99, category: 'Salads' },

    //Pizza Palace
    { id: 81, restaurant_id: 9, menu_item_name: 'Margherita Pizza', description: 'Classic pizza with tomato sauce, fresh mozzarella, and basil', price: 10.99, category: 'Pizzas' },
    { id: 82, restaurant_id: 9, menu_item_name: 'Pepperoni Feast', description: 'Pizza loaded with pepperoni, mozzarella, and tomato sauce', price: 12.99, category: 'Pizzas' },
    { id: 83, restaurant_id: 9, menu_item_name: 'Vegetarian Delight', description: 'Vegetarian pizza with assorted veggies and cheese', price: 11.99, category: 'Specialty Pizzas' },
    { id: 84, restaurant_id: 9, menu_item_name: 'Meat Lover\'s Supreme', description: 'Pizza topped with pepperoni, sausage, bacon, and ham', price: 14.99, category: 'Specialty Pizzas' },
    { id: 85, restaurant_id: 9, menu_item_name: 'Classic Calzone', description: 'Folded pizza dough filled with ricotta, mozzarella, and choice of toppings', price: 9.99, category: 'Calzones' },
    { id: 86, restaurant_id: 9, menu_item_name: 'Spinach and Feta Calzone', description: 'Calzone stuffed with spinach, feta cheese, and marinara sauce', price: 10.99, category: 'Calzones' },
    { id: 87, restaurant_id: 9, menu_item_name: 'Garlic Knots', description: 'Bite-sized knots of pizza dough brushed with garlic butter', price: 5.99, category: 'Appetizers' },
    { id: 88, restaurant_id: 9, menu_item_name: 'Mozzarella Sticks', description: 'Fried mozzarella sticks served with marinara sauce', price: 6.99, category: 'Appetizers' },
    { id: 89, restaurant_id: 9, menu_item_name: 'Caprese Salad', description: 'Fresh tomatoes, mozzarella, and basil drizzled with balsamic glaze', price: 8.99, category: 'Salads' },
    { id: 90, restaurant_id: 9, menu_item_name: 'Greek Salad', description: 'Crisp lettuce, olives, feta cheese, and Greek dressing', price: 9.99, category: 'Salads' },

    //Pasta Paradise
    { id: 91, restaurant_id: 10, menu_item_name: 'Spaghetti Bolognese', description: 'Classic spaghetti with hearty meat sauce', price: 12.99, category: 'Pasta' },
    { id: 92, restaurant_id: 10, menu_item_name: 'Chicken Alfredo', description: 'Creamy Alfredo sauce with grilled chicken over fettuccine', price: 14.99, category: 'Pasta' },
    { id: 93, restaurant_id: 10, menu_item_name: 'Quattro Formaggi Pizza', description: 'Four-cheese pizza with mozzarella, gorgonzola, parmesan, and provolone', price: 15.99, category: 'Pizza' },
    { id: 94, restaurant_id: 10, menu_item_name: 'Mushroom Truffle Pizza', description: 'Pizza topped with mushrooms, truffle oil, and arugula', price: 17.99, category: 'Pizza' },
    { id: 95, restaurant_id: 10, menu_item_name: 'Seafood Risotto', description: 'Creamy risotto with a medley of fresh seafood', price: 16.99, category: 'Risotto' },
    { id: 96, restaurant_id: 10, menu_item_name: 'Wild Mushroom Risotto', description: 'Risotto cooked with assorted wild mushrooms and parmesan', price: 13.99, category: 'Risotto' },
    { id: 97, restaurant_id: 10, menu_item_name: 'Bruschetta', description: 'Toasted bread topped with diced tomatoes, basil, and balsamic glaze', price: 8.99, category: 'Antipasti' },
    { id: 98, restaurant_id: 10, menu_item_name: 'Caprese Skewers', description: 'Skewers with fresh mozzarella, cherry tomatoes, and basil', price: 9.99, category: 'Antipasti' },
    { id: 99, restaurant_id: 10, menu_item_name: 'Tiramisu', description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone', price: 7.99, category: 'Desserts' },
    { id: 100, restaurant_id: 10, menu_item_name: 'Cannoli', description: 'Crispy pastry shells filled with sweet ricotta and chocolate chips', price: 6.99, category: 'Desserts' },

    //Vegan Vibes
    { id: 101, restaurant_id: 11, menu_item_name: 'Quinoa Buddha Bowl', description: 'Nutrient-packed bowl with quinoa, roasted vegetables, and tahini dressing', price: 14.99, category: 'Bowls' },
    { id: 102, restaurant_id: 11, menu_item_name: 'Chickpea Curry Bowl', description: 'Savory chickpea curry served with brown rice', price: 12.99, category: 'Bowls' },
    { id: 103, restaurant_id: 11, menu_item_name: 'Black Bean Burger', description: 'Juicy black bean patty with lettuce, tomato, and vegan mayo', price: 10.99, category: 'Burgers' },
    { id: 104, restaurant_id: 11, menu_item_name: 'Mushroom Quinoa Burger', description: 'Grilled mushroom and quinoa patty topped with avocado', price: 11.99, category: 'Burgers' },
    { id: 105, restaurant_id: 11, menu_item_name: 'Veggie Supreme Pizza', description: 'Loaded with assorted vegetables on a vegan crust', price: 16.99, category: 'Pizza' },
    { id: 106, restaurant_id: 11, menu_item_name: 'Pesto Zoodle Pizza', description: 'Zucchini noodle pizza with vegan pesto and cherry tomatoes', price: 15.99, category: 'Pizza' },
    { id: 107, restaurant_id: 11, menu_item_name: 'Falafel Wrap', description: 'Crispy falafel with hummus, lettuce, and tomatoes in a whole wheat wrap', price: 9.99, category: 'Wraps' },
    { id: 108, restaurant_id: 11, menu_item_name: 'Avocado and Bean Wrap', description: 'Mashed avocado, black beans, and salsa in a spinach tortilla', price: 8.99, category: 'Wraps' },
    { id: 109, restaurant_id: 11, menu_item_name: 'Vegan Chocolate Cake', description: 'Decadent chocolate cake made with plant-based ingredients', price: 7.99, category: 'Desserts' },
    { id: 110, restaurant_id: 11, menu_item_name: 'Coconut Mango Sorbet', description: 'Refreshing sorbet with the tropical flavors of coconut and mango', price: 6.99, category: 'Desserts' },

    //Healty Bites
    { id: 111, restaurant_id: 12, menu_item_name: 'Acai Berry Bowl', description: 'A refreshing bowl with acai berries, granola, and fresh fruit', price: 12.99, category: 'Bowls' },
    { id: 112, restaurant_id: 12, menu_item_name: 'Quinoa Power Bowl', description: 'Quinoa, mixed greens, roasted vegetables, and avocado', price: 11.99, category: 'Bowls' },
    { id: 113, restaurant_id: 12, menu_item_name: 'Mango Avocado Salad', description: 'Mixed greens with mango, avocado, cherry tomatoes, and citrus vinaigrette', price: 10.99, category: 'Salads' },
    { id: 114, restaurant_id: 12, menu_item_name: 'Superfood Caesar Salad', description: 'Kale, quinoa, chickpeas, and vegan Caesar dressing', price: 9.99, category: 'Salads' },
    { id: 115, restaurant_id: 12, menu_item_name: 'Grilled Chicken Power Plate', description: 'Grilled chicken breast, sweet potato, broccoli, and quinoa', price: 14.99, category: 'Bowls' },
    { id: 116, restaurant_id: 12, menu_item_name: 'Salmon and Avocado Wrap', description: 'Fresh salmon, avocado, mixed greens, and whole wheat wrap', price: 16.99, category: 'Wraps' },
    { id: 117, restaurant_id: 12, menu_item_name: 'Vegetable Hummus Wrap', description: 'Assorted vegetables and hummus wrapped in a whole wheat tortilla', price: 12.99, category: 'Wraps' },
    { id: 118, restaurant_id: 12, menu_item_name: 'Turkey and Quinoa Wrap', description: 'Sliced turkey, quinoa, black beans, and avocado in a spinach wrap', price: 15.99, category: 'Wraps' },
    { id: 119, restaurant_id: 12, menu_item_name: 'Chia Seed Pudding', description: 'Chia seeds soaked in almond milk with fresh fruit toppings', price: 5.99, category: 'Snacks' },
    { id: 120, restaurant_id: 12, menu_item_name: 'Roasted Chickpeas', description: 'Crispy roasted chickpeas seasoned with herbs and spices', price: 4.99, category: 'Snacks' },

    //Meditteranean Delight
    { id: 121, restaurant_id: 13, menu_item_name: 'Hummus Trio', description: 'Classic, roasted red pepper, and garlic hummus served with pita', price: 8.99, category: 'Appetizers' },
    { id: 122, restaurant_id: 13, menu_item_name: 'Falafel Platter', description: 'Crispy chickpea patties served with tahini sauce and salad', price: 10.99, category: 'Appetizers' },
    { id: 123, restaurant_id: 13, menu_item_name: 'Chicken Souvlaki Skewers', description: 'Grilled chicken skewers marinated in Mediterranean spices', price: 12.99, category: 'Entrees' },
    { id: 124, restaurant_id: 13, menu_item_name: 'Beef Kebab Plate', description: 'Tender beef kebabs with roasted vegetables and tzatziki', price: 14.99, category: 'Entrees' },
    { id: 125, restaurant_id: 13, menu_item_name: 'Greek Salad', description: 'Crisp lettuce, tomatoes, cucumbers, olives, and feta with Greek dressing', price: 9.99, category: 'Salads' },
    { id: 126, restaurant_id: 13, menu_item_name: 'Mediterranean Quinoa Salad', description: 'Quinoa, cherry tomatoes, Kalamata olives, and feta cheese', price: 11.99, category: 'Salads' },
    { id: 127, restaurant_id: 13, menu_item_name: 'Vegetarian Pita Pocket', description: 'Hummus, falafel, mixed veggies, and tahini in a warm pita', price: 10.99, category: 'Wraps' },
    { id: 128, restaurant_id: 13, menu_item_name: 'Lamb Gyro Wrap', description: 'Sliced lamb, tomatoes, onions, and tzatziki in a soft wrap', price: 13.99, category: 'Wraps' },
    { id: 129, restaurant_id: 13, menu_item_name: 'Stuffed Grape Leaves', description: 'Grape leaves filled with rice, pine nuts, and herbs', price: 7.99, category: 'Sides' },
    { id: 130, restaurant_id: 13, menu_item_name: 'Moussaka', description: 'Layered casserole with eggplant, minced meat, and béchamel sauce', price: 15.99, category: 'Sides' },

    //The Oasis
    { id: 131, restaurant_id: 14, menu_item_name: 'Mezze Platter', description: 'Assortment of Mediterranean appetizers, including hummus and baba ganoush', price: 14.99, category: 'Appetizers' },
    { id: 132, restaurant_id: 14, menu_item_name: 'Lentil Soup', description: 'Hearty lentil soup with aromatic spices and vegetables', price: 8.99, category: 'Soups' },
    { id: 133, restaurant_id: 14, menu_item_name: 'Grilled Octopus', description: 'Tender octopus marinated and grilled to perfection', price: 18.99, category: 'Seafood' },
    { id: 134, restaurant_id: 14, menu_item_name: 'Lamb Kofta Skewers', description: 'Spiced ground lamb skewers served with mint yogurt sauce', price: 16.99, category: 'Entrees' },
    { id: 135, restaurant_id: 14, menu_item_name: 'Tabbouleh Salad', description: 'Refreshing salad with bulgur, tomatoes, parsley, and mint', price: 10.99, category: 'Salads' },
    { id: 136, restaurant_id: 14, menu_item_name: 'Fattoush Salad', description: 'Mixed greens, tomatoes, cucumbers, and crispy pita with sumac dressing', price: 11.99, category: 'Salads' },
    { id: 137, restaurant_id: 14, menu_item_name: 'Falafel Wrap', description: 'Crispy falafel with tahini, lettuce, and tomatoes in a warm wrap', price: 12.99, category: 'Wraps' },
    { id: 138, restaurant_id: 14, menu_item_name: 'Shawarma Wrap', description: 'Marinated and sliced meat with garlic sauce in a soft wrap', price: 14.99, category: 'Wraps' },
    { id: 139, restaurant_id: 14, menu_item_name: 'Dolma', description: 'Grape leaves stuffed with rice, pine nuts, and herbs', price: 7.99, category: 'Sides' },
    { id: 140, restaurant_id: 14, menu_item_name: 'Spanakopita', description: 'Spinach and feta wrapped in phyllo dough', price: 9.99, category: 'Sides' },
  
  ]);
};
