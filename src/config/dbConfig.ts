import { Sequelize, Dialect } from 'sequelize';

const dialect: Dialect | undefined = process.env.DB_DIALECT as Dialect | undefined;


const dbConfig = new Sequelize(
    process.env.DB_DATABASE || 'data', 
    process.env.DB_USERNAME || 'root', 
    process.env.DB_PASSWORD || '',
     {
        host: process.env.DB_HOST || 'localhost',
        dialect: dialect || 'mariadb',
        port: Number(process.env.DB_PORT) || 3306,
     }
);

export const dbConnection = { dbConfig };