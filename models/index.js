'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const wurkAday_db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    wurkAday_db[model.name] = model;
  });

Object.keys(wurkAday_db).forEach(modelName => {
  if (wurkAday_db[modelName].associate) {
    wurkAday_db[modelName].associate(wurkAday_db);
  }
});

wurkAday_db.sequelize = sequelize;
wurkAday_db.Sequelize = Sequelize;

module.exports = wurkAday_db;
