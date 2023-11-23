const restaurantsController = require('../controllers/restaurant-controller')
const router = require('express').Router();

router
    .route('/')
    .get(restaurantsController.getRestaurants);

router
    .route('/:id')
    .get(restaurantsController.getRestaurant);

module.exports = router;