'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      // Define many-to-many association
      this.belongsToMany(models.User, {
        through: 'User-Roles',
        as: 'users', // Alias for the association
        foreignKey: 'roleId',
      });
    }
  }
  Role.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Role',
    }
  );
  return Role;
};
