'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Review belongs to restaurant & reviewer 
      Review.belongsTo(models.Restaurant, {
        foreignKey: 'restaurantId',
        onDelete: 'CASCADE'
    });
      Review.belongsTo(models.Reviewer, {
        foreignKey: 'reviewerId',
        onDelete: 'CASCADE'
      })
    }
  }
  Review.init({
    reviewerId: DataTypes.INTEGER,
    stars: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5
      }
    },
    title: DataTypes.STRING,
    review: DataTypes.STRING,
    restaurantId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
