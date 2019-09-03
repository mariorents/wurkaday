const db = require("../models");

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
 
        username: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        
        profileType: {
            type: DataTypes.TEXT
                
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        status: {
            type: DataTypes.ENUM("active","inactive"),
            defaultValue: "active"
        }
            
    });
    return Users;
}


