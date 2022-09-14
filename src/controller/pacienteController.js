const { Pacientes } = require('../models');

const pacienteController = {
    cadastrarPaciente: async (req, res) => {
        try {
            const {nome, email, idade} = req.body;
            if(!nome || !email || !idade) return res.status(400).json('Preencha todos os campos!');

            const novoPaciente = await Pacientes.create({
                nome,
                email,
                idade,
            });
            res.status(201).json(novoPaciente);
                 
        } catch (err) {
            console.error(err);
        }    
    },

    listarPacientes: async (req, res) => {
        try {
            const listarPacientes = await Pacientes.findAll();

            res.status(200).json(listarPacientes);
        } catch (err) {
            console.error(err);
        }
    },

    listarPacienteId: async (req, res) => {
        try {
            const { id } = req.params;
        
            const pacienteId = await Pacientes.findByPk(id);
            if (pacienteId !== null) {
                res.status(200).json(pacienteId);
            }
            else {
                res.status(404).json('Id não encontrado.')
            }
            
        } catch (err) {
            console.error(err);
        }
    },

    atualizarPaciente: async (req, res) => {
        try {
            const { id } = req.params;
            const {nome, email, idade} = req.body;
            const pacienteId = await Pacientes.findByPk(id);
        
            if (pacienteId !== null) {
                if(!nome || !email || !idade) return res.status(400).json('Preencha todos os campos!');
                const pacienteAtualizado = await Pacientes.update({
                    nome,
                    email,
                    idade,
                },
                {
                    where: {
                        id,
                    },
                });
                res.status(200).json(pacienteAtualizado)
            }
            else {
                res.status(404).json('Id não encontrado.')
            }
        } catch (err) {
            console.error(err);
        }
    },

    deletarPaciente: async (req, res) => {
        try {
            const { id } = req.params;
            const pacienteId = await Pacientes.findByPk(id);
            if (pacienteId !== null) {
                await Pacientes.destroy({
                    where: {
                        id,
                    },
                });
                res.status(204);
            } else {
                res.status(404).json('Id não encontrado');
            }
            
        } catch (err) {
            console.error(err);
        }
    },
    countPacientes: async (req, res) => {
        try {
            const pacientes = await Pacientes.count();
            res.json(`${pacientes} pacientes`);
            } catch (error) {
                console.error(error)
            }
    }
};

module.exports = pacienteController;