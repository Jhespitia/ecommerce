const { Router } = require('express');
const { createUser } = require('../controllers');

const router = Router();

router.post('/users', createUser);

module.exports = router;