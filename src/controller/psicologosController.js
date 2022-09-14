
const { Psicologos } = require("../models/index");
const bcrypt = require("bcryptjs");

const psicologosController = {

    async createPsychologist (req, res) {
        try {
            const { nome, email, senha, apresentacao } = req.body;
            const novaSenha = bcrypt.hashSync(senha, 10);
            const novoPsicologo = await Psicologos.create({ nome, email, senha: novaSenha, apresentacao, });
            res.status(201).json(novoPsicologo);
        }
        catch (error) {
            console.error(error)
        }
    },

    async listPsychologists (req, res) {
        try {
            const listaDosPsicologos = await Psicologos.findAll();
            res.status(200).json(listaDosPsicologos);
        }
        catch (error) {
            res.json("Não foi possível listar os devidos psicólogos");
            console.error(error);
        }
    },

    async listPsychologistsID (req, res) {
        try {
            const { id } = req.params;
            const psicologoID = await Psicologos.findByPk(id);
            if (!psicologoID) {
                res.status(404).json("Não há um psicólogo com este id " + id);
            }
            res.status(200).json(psicologoID);
        }
        catch (error) {
            res.status(500).json("Não foi possível listar este psicólogo por este ID");
        }
    },

    async deletePsychologist (req, res) {
        try {
            const { id } = req.params;
            const psicologoID = await Psicologos.findByPk(id);
            await Psicologos.destroy({
                where: {
                id,
                },
            });
            if (!psicologoID) {
                return res.status(404).json("Não há um psicólogo com esse ID" + id);}

            res.status(204).json(`O id: ${id} foi deletado com sucesso`);
        }
        catch (error) {
                console.error(error);
        }
    },

    async updatePsychologist (req, res) {
        try {
            const { id } = req.params;
            const { nome, email, senha, apresentacao } = req.body;
            const novaSenha = bcrypt.hashSync(senha, 10);
            const psicologoID = await Psicologos.findByPk(id);
            const atualizarPsicologo = await Psicologos.update({ nome, email, senha: novaSenha, apresentacao, },
            {
                where: {
                id,
                },
            });
            if (!psicologoID) {
                res.status(404).json("Não há um psicólogo com este id " + id);
            }
            res.status(200).json(atualizarPsicologo)
        }
        catch (error) {
        res.status(400).json("Não foi possível atualizar o psicólogo");
        }
    },
    
    countPsicologos: async (req, res) => {
        try {
          const psicologos = await Psicologos.count();
          res.json(`${psicologos} psicologos`);
        } catch (error) {
          console.error(error);
        }
      }  
};

module.exports = psicologosController