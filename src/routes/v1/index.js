const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user-controllers');
const { AuthRequestValidators } = require('../../middlewares/index');

router.post('/signup', AuthRequestValidators.validateUserAuth, userController.create);
router.post('/signin', AuthRequestValidators.validateUserAuth, userController.signIn);
router.get('/isAuthenticated', userController.isAuthenticated);
router.get('/isAdmin', AuthRequestValidators.validateIsAdmin, userController.isAdmin);

module.exports = router;