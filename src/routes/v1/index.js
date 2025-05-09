const express = require('express');

const router = express.Router();

const {userController,signIn} = require('../../controllers/user-controllers');

router.post('/signup', userController.create);
router.post('/signin',signIn);

module.exports = router;