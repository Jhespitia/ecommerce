const { Router } = require('express');
const { userLogin } = require('../controllers');

const router = Router();

router.post('/user/login', userLogin);

module.exports = router;