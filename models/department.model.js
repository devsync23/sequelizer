import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Department = sequelize.define('Department', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Department;
};