import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('nome_banco', 'Usuario', 'Senha', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;
