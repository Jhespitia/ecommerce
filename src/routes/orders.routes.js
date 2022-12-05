const { Router } = require('express');

const { getUserOrders } = require('../controllers');

const router = Router();

router.get('/orders/user/:id', getUserOrders);

module.exports = router;