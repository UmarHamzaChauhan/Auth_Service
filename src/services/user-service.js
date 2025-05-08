const userRepository = require('../repository/user-repository');
const jwt = require('jsonwebtoken');
const {JWT_KEY} = require('../config/serverConfig');
class userService {

  constructor() {
    this.userRepository = new userRepository();
  }
  
  async create(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    }

    catch(error) {
      console.log('something went wrong in the service layer');
      throw error;
    }
  }
  createToken(user) {
    try {
      const result = jwt.sign({user},JWT_KEY,{expiresIn:'24h'});
      return result;
    }
    catch(error) {
      console.log('unable to create jwt tokens');
      throw error;
    }
  }
  verifyToken(token) {
    try {
      const response = jwt.verify(token,JWT_KEY);
      return response;
    }
    catch(error) {
      console.log('token could not be verified');
      throw error;
    }
  }
}
module.exports = new userService();