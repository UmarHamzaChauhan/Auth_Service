const userRepository = require('../repository/user-repository');

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
}
module.exports = new userService();