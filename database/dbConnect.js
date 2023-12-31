const {Sequelize} = require('sequelize');
const dotenv = require('dotenv');

// config dotenv
dotenv.config();

//
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST =  process.env.DB_HOST;


const sequel = new Sequelize(DB_NAME,DB_USER,DB_PASS,{
   host : DB_HOST,
   dialect : 'mysql'
});

// sequel.authenticate()
module.exports = sequel