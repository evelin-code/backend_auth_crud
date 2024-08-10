import { DataTypes } from 'sequelize';
import sequelize from '../database';
import EmployeeModel from './EmployeeModel';

const RequestModel = sequelize.define('RequestModel', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  code: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(500),
    allowNull: false
  },
  summary: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  employee_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: EmployeeModel,
      key: 'id'
    }
  }
}, {
  tableName: 'tk_requests',
  timestamps: false,
});

EmployeeModel.hasMany(RequestModel, { foreignKey: 'employee_id', as: 'requests' });
RequestModel.belongsTo(EmployeeModel, { foreignKey: 'employee_id', as: 'employee' });

export default RequestModel;
