import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('prod', 'root', 'LUAN', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;
