const { Router } = require('express');
const { getUserProducts, createProdut, getAllProducts } = require('../controllers');
const authenticate = require('../middlewares/auth.middleware')

const router = Router();

router.post('/products', createProdut);

router.get('/products', getAllProducts);

router.get('/products/user/:id', getUserProducts);

module.exports = router;
