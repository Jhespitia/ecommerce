const { Router } = require('express');
const { getAllCart, getUserCart, addProductToCart } = require('../controllers');
const authenticate = require('../middlewares/auth.middleware')

const router = Router();

router.get('/cart', getAllCart);
router.get('/cart/user/:id', getUserCart);
router.post('/cart/:carId/product', authenticate, addProductToCart);

module.exports = router;