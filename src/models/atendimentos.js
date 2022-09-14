const db = require("../database/config");
const { DataTypes } = require("sequelize");
const Pacientes = require("./pacientes");
const Psicologos = require("./psicologos");

const {db} = require('../database/config');
const { DataTypes } = require('sequelize');
const { Pacientes } = require('./index')


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
    createdAt: false,
    updatedAt: false
});


module.exports = atendimentos;
