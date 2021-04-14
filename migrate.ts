import { Sequelize } from 'sequelize-typescript';
import Umzug = require('umzug');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 5432,
  username: 'mamane19',
  password: 'Mamane1922*',
  database: 'fintech_db',
});

const umzug = new Umzug({
  storage: 'sequelize',
  storageOptions: { sequelize },
  logging: false,
  migrations: {
    params: [sequelize, sequelize.constructor],
    path: './src/migrations',
    pattern: /\.ts$/,
  },
});

const task = (process.argv[2] || '').trim();

switch (task) {
  case 'up':
    umzug.up().then((result) => {
      console.log('Migrations up success', result);
      process.exit(0);
    });
    break;
  case 'down':
    umzug.down().then((result) => {
      console.log('Migrations down success', result);
      process.exit(0);
    });
    break;
  default:
    break;
}