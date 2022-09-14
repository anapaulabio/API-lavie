const { Atendimentos, Pacientes, Psicologos } = require("../models/index");

const atendimentosController = {
  listAtendimento: async (req, res) => {
    try {
      const atendimentos = await Atendimentos.findAll({
        include: [
          {
            model: Pacientes,
          },
          {
            model: Psicologos,
          },
        ],
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
        include: [
          {
            model: Pacientes,
          },
          {
            model: Psicologos,
          },
        ],
      });
      if (!atendimento) {
        return res.status(400).json("Identificador não encontrado");
      } else {
        return res.json(atendimento);
      }
    } catch (error) {
      console.error(error);
    }
  },
  registerAtendimento: async (req, res) => {
    console.log(req.auth);

    const { data_atendimento, observacao, pacientes_id, psicologos_id } =
      req.body;
    try {
      const newAtendimento = await Atendimentos.create({
        data_atendimento,
        observacao,
        pacientes_id,
        psicologos_id,
      });
      res.status(201).json(newAtendimento);
    } catch (error) {
      console.error(error);
    }
  },
  countAtendimentos: async (req, res) => {
    try {
      const atendimentos = await Atendimentos.count({
        include: [
          {
            model: Pacientes,
          },
          {
            model: Psicologos,
          },
        ],
      });
      return res.json(`${atendimentos} atendimentos`);
    } catch (error) {
      console.error(error);
    }
  },
  
  averageAtendimentos: async (req,res) => {
    try {
      const atendimentos = await Atendimentos.count()
      const psicologos = await Psicologos.count()
      res.json(`Nossa média de atendimentos por psicologos é igual a ${atendimentos / psicologos}`)
    } catch (error) {
      console.error(error)
    }
  }
};

module.exports = atendimentosController;