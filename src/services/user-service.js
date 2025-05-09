const userRepository = require('../repository/user-repository');
const jwt = require('jsonwebtoken');
const {JWT_KEY} = require('../config/serverConfig');
const bcrypt = require('bcrypt');
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
  async signIn(email,plainPassword) {
    const user = await this.userRepository.getByEmail(email); {

      if(!user) {
        throw {error :'inavlid email'};
      }
    }
    const passMatch = this.checkPassword(plainPassword,user.password);

    if(!passMatch) {
      console.log('password do not match');
      throw {error: 'mismatch'};
    }

    const newJWT = this.createToken({email:user.email, id:user.id});
    return newJWT; 

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
  checkPassword(userInputPlainPassword,encryptedPassword) {
    try {
     return bcrypt.compareSync(userInputPlainPassword,encryptedPassword);
    }
    catch(error) {
      console.log('error in comparing passwords');
      throw error;
    }
  }
}
module.exports = new userService();