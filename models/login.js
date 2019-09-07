// const bcrypt = require("bcrypt");


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

        about: {
            type: DataTypes.TEXT
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        
    });

    
    
    Users.prototype.validPassword = password => {
        return bcrypt.compareSync(password, this.password);
    };

    Users.addHook("beforeCreate", user => {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });


    return Users;
};