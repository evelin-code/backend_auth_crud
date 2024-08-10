import { DataTypes } from 'sequelize';
import sequelize from '../database';
import RoleModel from './RoleModel';
import bcrypt from 'bcryptjs';

const UserModel = sequelize.define('UserModel', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(150),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(500),
    allowNull: false
  },
  rol_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: RoleModel,
      key: 'id'
    }
  }
}, {
  tableName: 'tk_users',
  timestamps: false,
});

RoleModel.hasMany(UserModel, { foreignKey: 'rol_id' });
UserModel.belongsTo(RoleModel, { foreignKey: 'rol_id', as: 'role' });

UserModel.prototype.encryptPassword = async function(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

UserModel.prototype.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password);
}

export default UserModel;
