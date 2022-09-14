const {db} = require('../database/config');
const { DataTypes } = require('sequelize');
const Psicologos = require('./psicologos');
const Pacientes = require('./pacientes');

const atendimentos = db.define("atendimentos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data_atendimento: {
        type: DataTypes.DATE
    },
    observacao: {
        type: DataTypes.STRING
    },
    psicologos_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Psicologos,
            foreignKey: 'psicologos_id'
        }
    }, 
    pacientes_id: {
        type: DataTypes.INTEGER, 
        references: {
            model: Pacientes,
            foreignKey: 'pacientes_id'
        }
    }
},
{
    tableName: "atendimentos",
    timestamps: false,
});

module.exports = atendimentos;
