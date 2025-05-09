const userService = require('../services/user-service'); // Import the already-instantiated UserService

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
}

const signIn = async(req,res) => {
  try {  
   const response = await userService.signIn(req.body.email,req.body.password);
   return res.status(200).json({
    success: true,
    message: 'Successfully signed in',
    data: response,
    err: {},
  });
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'error in sign-in',
      data: {},
      success: false,
      err: error,
    });
  }
}

module.exports = {
  userController: new UserController(),
  signIn
};
