const { Atendimentos, Pacientes } = require("../models");

const atendimentosController = {
  listAtendimento: async (req, res) => {
    try {
      const atendimentos = await Atendimentos.findAll({
        include:
          {
            model: Pacientes,
          }
      });
      return res.json(atendimentos);
    } catch (error) {
      console.error(error);
    }
  },
  listOne: async (req, res) => {
    const { id } = req.params;
    try {
      const atendimento = await Atendimentos.findByPk(id, {
        include:
          {
            model: Pacientes,
          }
      });
      if(!atendimento){
        return res.status(400).json("Identificador não encontrado")
      } else {
        return res.json(atendimento)
      }     
    } catch (error) {
        console.error(error)
    }
  },
  registerAtendimento: async (req, res) => {
    console.log(req.auth)

    const { data_atendimento, observacao, pacientes_id } = req.body;
    try {
      const newAtendimento = await Atendimentos.create({
        data_atendimento,
        observacao,
        pacientes_id,
      });
      res.status(201).json(newAtendimento)
    } catch (error) {
      console.error(error)
    }
  }
};

module.exports = atendimentosController;
