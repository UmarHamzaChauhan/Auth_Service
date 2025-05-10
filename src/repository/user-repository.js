const { User,Role } = require ('../models/index');


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
  async getById(userId) {
    try {
      const user = await User.findByPk(userId,{
        attributes:['email','id']
      });
      return user;
    }
    catch(error) {
      console.log('Error getting user by ID in repository layer: ', error);
      throw error;
    }
  }
  async getByEmail(email) {
    try {
      const user = await User.findOne({
        where: {
          email:email
        }
      })
      return user;
    }
    catch(error) {
      console.log('something wrong in finding by email');
      throw error;
    }
  }
  async isAdmin(userId) {
    try {
      const user =await User.findByPk(userId);
      console.log('user is',user);
      const adminRole = await Role.findOne({
        where: {
         name:'ADMIN'
        }
      });
      console.log('adminRole is',adminRole);
      return await user.hasRole(adminRole);
    }
    catch(error) {
      console.log('Error in finding AdminRole',error);
      throw error;
    }
  }
}

module.exports = userRepository;

