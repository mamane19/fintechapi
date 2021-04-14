import { Sequelize } from 'sequelize-typescript';

export const databaseProvider = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: "localhost",
        port: 5432,
        username: "mamane19",
        password: "Mamane1922*",
        database: "fintech_db"
      });
      sequelize.addModels([]);
      return sequelize;
    }
  }
]