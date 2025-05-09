const express = require('express');

const router = express.Router();

const {userController,signIn} = require('../../controllers/user-controllers');
const {AuthRequestValidators} = require('../../middlewares/index');
const userService = require('../../services/user-service');
const userControllers = require('../../controllers/user-controllers');

router.post('/signup',
   AuthRequestValidators.validateUserAuth,
   userController.create
  );
router.post('/signin',
  AuthRequestValidators.validateUserAuth,
  signIn
  );
router.get('/isAuthenticated',
  userControllers.isAuthenticated
  );

module.exports = router; 