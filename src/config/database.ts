import { config } from 'dotenv';
import { Sequelize } from 'sequelize';

config();
const db = new Sequelize(
  process.env.DB_NAME || 'docs',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
    port: Number(process.env.DB_PORT) || Number(5432),
    define: {
      timestamps: false,
    },
  }
);

export default db;
