import { Sequelize } from 'sequelize-typescript';
import { Accounts } from '../accounts/accounts.entity';
import { Users } from './../user/users.entity';

export const databaseProvider = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: 5432,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
      });
      sequelize.addModels([Users, Accounts]);
      return sequelize;
    },
  },
];
