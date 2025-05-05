'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aluno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Aluno.init({
    foto: DataTypes.STRING,
    nome: DataTypes.STRING,
    idade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Aluno',
    tableName: 'aluno'
  });
  return Aluno;
};