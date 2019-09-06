module.exports = (sequelize, DataTypes) => {
    var Profile = sequelize.define("Profile", {
        name: {
           type: DataTypes.STRING,
           allowNull: true,
           validate: {
            len: [1]
           }
<<<<<<< HEAD
        }
=======
        },
        
>>>>>>> bd2aaa47520092a5ed454a12747068ceaef725d7
    });
    // this should join with the post.js model
    Profile.associate = (models) => {
      Profile.hasMany(models.Post, {
        // on delete of profile, deletes all posts attached
        onDelete: "cascade"
      })
    }
    return Profile;
  };