const userService = require('../services/user-service');

class UserController {
  async create(req, res) {
    try {
      const response = await userService.create({
        email: req.body.email,
        password: req.body.password,
      });

      return res.status(200).json({
        success: true,
        message: 'Successfully created a new user',
        data: response,
        err: {},
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Something went wrong in the controller',
        data: {},
        success: false,
        err: error,
      });
    }
  }

  async signIn(req, res) {
    try {
      const response = await userService.signIn(req.body.email, req.body.password);
      return res.status(200).json({
        success: true,
        message: 'Successfully signed in',
        JWTToken: response,
        err: {},
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Error in sign-in',
        data: {},
        success: false,
        err: error,
      });
    }
  }

  async isAuthenticated(req, res) {
    try {
      const token = req.headers['x-access-token'];
      const response = await userService.isAuthenticated(token);
      return res.status(200).json({
        success: true,
        message: 'User is authenticated and token is valid',
        data: response,
        err: {},
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Not authenticated',
        data: {},
        err: error,
      });
    }
  }

  async isAdmin(req, res) {
    try {
      const response = await userService.isAdmin(req.body.id);
      console.log('response is :',response);
      return res.status(200).json({
        success: true,
        message: 'Yes, is Admin',
        data: response,
        err: {},
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Something went wrong in controller',
        data: {},
        err: error,
      });
    }
  }
}

module.exports = new UserController();