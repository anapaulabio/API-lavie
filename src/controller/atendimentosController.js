const { Atendimentos, Pacientes, Psicologos } = require("../models");

const atendimentosController = {
  listAtendimento: async (req, res) => {
    try {
      const atendimentos = await Atendimentos.findAll({
        include:
          {
            model: Pacientes,
          }
      });
      res.status(200).json(atendimentos);
    }
    catch (error) {
      console.error(error);
    };
  },

  listOne: async (req, res) => {
    try {
      const { id } = req.params;
      const atendimento = await Atendimentos.findByPk(id, {
        include:
          {
            model: Pacientes,
          }
      });
      if(!atendimento){
        res.status(400).json("Identificador não encontrado")
      } else {
        res.status(200).json(atendimento)
      }     
    }
    catch (error) {
        console.error(error)
    };
  },

  registerAtendimento: async (req, res) => {
    console.log(req.auth)

    try {
      const { data_atendimento, observacao, pacientes_id } = req.body;
      const newAtendimento = await Atendimentos.create({
        data_atendimento,
        observacao,
        pacientes_id,
      });
      res.status(201).json(newAtendimento)
    }
    catch (error) {
      console.error(error)
    }
  }
};

module.exports = atendimentosController;


