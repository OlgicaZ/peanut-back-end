const restaurantsController = require('../controllers/restaurant-controller');
const businessHoursController = require('../controllers/business-hours-controller');
const addressController = require('../controllers/address-controller');
const menuItemController = require('../controllers/menu-item-controller');


const router = require('express').Router();

//get all restaurants
router
    .route('/')
    .get(restaurantsController.getRestaurants);

//get all restaurant addresses
router
    .route('/locations')
    .get(addressController.getRestaurantAddresses);

//get all restaurant addresses
router
    .route('/business-hours')
    .get(businessHoursController.getAllBusinessHours);

//get details for a particular restaurant
router
    .route('/:id')
    .get(restaurantsController.getRestaurant);

//get business hours for a particular restaurant
router
    .route('/:id/business-hours')
    .get(businessHoursController.getRestaurantBusinessHours);

//get all menu items
router
    .route('/:id/menu-items')
    .get(menuItemController.getMenuItems);

//get filtered menu items

module.exports = router;