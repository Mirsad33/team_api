const { Sequelize } = require('sequelize')

const client = new Sequelize(
    'teams_db', 
    'postgres', 
    'Struga3387', 
    {
    host: 'localhost',
    dialect: 'postgres',
    // logging: false
  });

  module.exports = client