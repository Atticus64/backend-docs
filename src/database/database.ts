import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const db = new Sequelize(
  process.env.DB_NAME || 'test',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD || 'secret',
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
    port: Number(process.env.DB_PORT) ?? 5422,
    define: {
      timestamps: false,
    },
  }
);

export default db;
