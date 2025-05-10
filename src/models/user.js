'use strict';
const { Model } = require('sequelize');
const { SALT } = require('../config/serverConfig');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Define many-to-many association
      this.belongsToMany(models.Role, {
        through: 'User-Roles',
        as: 'roles', // Alias for the association
        foreignKey: 'userId',
      });
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 200],
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  // Hook to hash the password before creating a user
  User.beforeCreate((user) => {
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
  });

  return User;
};
