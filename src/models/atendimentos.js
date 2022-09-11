const db = require("../database/config");
const { DataTypes } = require("sequelize");
const Pacientes = require("./pacientes");
const Psicologos = require("./psicologos");

const atendimentos = db.define({
  atendimento_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  psicologo_id: {
    type: DataTypes.INTEGER,
    references: {
        model: Psicologos,
        foreignKey: 'psicologo_id'
    }
  },
  paciente_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Pacientes,
      foreignKey: "paciente_id",
    },
  },
  data_atendimento: {
    type: DataTypes.DATE,
  },
  observacao: {
    type: DataTypes.STRING,
  }
},
{
  tableName: 'atendimentos',
});


module.exports = atendimentos;
