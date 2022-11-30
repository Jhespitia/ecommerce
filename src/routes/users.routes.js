const { Router } = require('express');
const { createUser, getAllUsers } = require('../controllers');
const authenticate = require('../middlewares/auth.middleware')

const router = Router();

router.post('/users', createUser);
router.get('/users', authenticate, getAllUsers);

module.exports = router;