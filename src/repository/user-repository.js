const { User } = require ('../models/index');


class userRepository { 
  
  async create(data) {
    try {
      console.log('In Repository, Data:', data);
      const user = await User.create(data);
    }
    catch (error) {
      console.log('Error creating user in repository layer: ', error);
      throw error;
    }
  }

  async destroy(userId) {
    try {
      await User.destroy({
        where: {
          id:userId
        }
      });
    }
    catch (error) {
      console.log('Error deleting user in repository layer: ', error);
      throw error;
    }
  }
}

module.exports = userRepository;

