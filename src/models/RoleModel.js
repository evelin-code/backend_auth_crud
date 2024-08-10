import { DataTypes } from 'sequelize';
import sequelize from '../database';

const RoleModel = sequelize.define('RoleModel', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  tableName: 'tk_roles',
  timestamps: false,
});

export default RoleModel;
