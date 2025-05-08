const express = require('express');

const router = express.Router();

const userController = require('../../controllers/user-controllers');

router.post('/signup', userController.create);

module.exports = router;