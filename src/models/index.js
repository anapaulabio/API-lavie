const bcrypt = require("bcryptjs");
const Psicologos = require("./psicologos");
const Atendimentos = require('./atendimentos');
const Pacientes = require('./pacientes')

const senha = "123";
const hash = bcrypt.hashSync(senha, 10);

Atendimentos.belongsTo(Pacientes, {
  foreignKey: 'pacientes_id',
});

Atendimentos.belongsTo(Psicologos, {
  foreignKey: 'psicologos_id',
});

Pacientes.hasMany(Atendimentos, {
  foreignKey: 'pacientes_id',
});

Psicologos.hasMany(Atendimentos, {
  foreignKey: 'psicologos_id',
})



module.exports = {
  Atendimentos,
  Pacientes,
  Psicologos
};