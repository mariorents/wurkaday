module.exports = (sequelize, DataTypes) => {
    var Post = sequelize.define("Post", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      payment: {
        type: DataTypes.INTEGER.UNSIGNED,
        
      },
      


    });
    // this should join with profiles models
    Post.associate = (models) => {
      Post.belongsTo(models.Profile, {
        
        foreignKey: {
          allowNull: true
        }
      });
  
    };
    
    return Post;
  }