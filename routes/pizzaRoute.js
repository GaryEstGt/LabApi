const express = require('express');
const router = express.Router();

const pizza_controller = require('../controllers/pizzaController');

router.get('/test', pizza_controller.test);
router.post('/create', pizza_controller.pizza_create);
router.get('/details', pizza_controller.pizza_details);
router.get('/:nombre', pizza_controller.pizza_detailsone);
router.put('/:nombre/update', pizza_controller.pizza_update);
router.delete('/:nombre/delete', pizza_controller.pizza_delete);
module.exports = router;
