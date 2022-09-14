const Psicologos = require("./psicologos");
const Atendimentos = require('./atendimentos');
const Pacientes = require('./pacientes')


Atendimentos.belongsTo(Pacientes, {
    foreignKey: 'pacientes_id'
});

Pacientes.hasMany(Atendimentos, {
    foreignKey: 'pacientes_id'
});

Atendimentos.belongsTo(Psicologos, {
    foreignKey: 'psicologos_id'
});

Psicologos.hasMany(Atendimentos, {
    foreignKey: 'psicologos_id'
})


module.exports = {
  Psicologos,
  Atendimentos,
  Pacientes
};