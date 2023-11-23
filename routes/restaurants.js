const restaurantsController = require('../controllers/restaurant-controller');
const businessHoursController = require('../controllers/business-hours-controller');
const addressController = require('../controllers/address-controller');

const router = require('express').Router();

router
    .route('/')
    .get(restaurantsController.getRestaurants);

router
    .route('/locations')
    .get(addressController.getRestaurantAddresses);

router
    .route('/:id')
    .get(restaurantsController.getRestaurant);

router
    .route('/:id/business-hours')
    .get(businessHoursController.getBusinessHours);

module.exports = router;