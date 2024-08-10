import sequelize from './database';
import './models/RoleModel';
import './models/UserModel';
import './models/EmployeeModel';
import './models/RequestModel';

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Database & tables synchronized!');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
};

syncDatabase();
