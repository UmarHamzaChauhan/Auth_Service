const express = require('express');

const router = express.Router();

const {userController,signIn} = require('../../controllers/user-controllers');
const {AuthRequestValidators} = require('../../middlewares/index');

router.post('/signup',
   AuthRequestValidators.validateUserAuth,
   userController.create
  );
router.post('/signin',
  AuthRequestValidators.validateUserAuth,
  signIn
  );


module.exports = router; 