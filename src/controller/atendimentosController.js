/*const { Atendimentos, Pacientes, Psicologos } = require("../models/index");

const atendimentoController = {
  listAtendimentos: async (req, res) => {
    try {
      const atendimentos = await Atendimentos.findAll({
        include: {
          model: Pacientes,
        },
      });
      res.status(200).json(atendimentos);
    } catch (err) {
      console.error(err);
    }
  },

  listOne: async (req, res) => {
    const {id} = req.params;
    try {
      const atendimento = await Atendimentos.findByPk({
        where: {
            atendimento_id: id,
        },
        include: {
            model: Pacientes,
        }
      })
    } catch (error) {
        console.error(error);
    }
  },

  registerAtendimento: async (req,res) => {
    const { paciente_id, data_atendimento, observacao } = req.body;
    try {
        const newAtendimento = await Atendimentos.create({
            paciente_id,
            data_atendimento,
            observacao
        })
    } catch (error) {
        res.status(400)
    }
  }
};

module.exports = atendimentoController;*/