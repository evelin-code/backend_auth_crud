import { DataTypes } from 'sequelize';
import sequelize from '../database';
import UserModel from './UserModel';

const EmployeeModel = sequelize.define('EmployeeModel', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  date_entry: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  salary: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: UserModel,
      key: 'id'
    }
  }
}, {
  tableName: 'tk_employees',
  timestamps: false,
});

UserModel.hasOne(EmployeeModel, { foreignKey: 'user_id' });
EmployeeModel.belongsTo(UserModel, { foreignKey: 'user_id' });

export default EmployeeModel;
