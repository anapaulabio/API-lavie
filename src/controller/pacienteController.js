const Pacientes = require('../models/pacientes');

const pacienteController = {
    cadastrarPaciente: async (req, res) => {
        try {
            const {nome, email, idade} = req.body;

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

            res.status(200).json(pacienteId);
        } catch (err) {
            console.error(err);
        }
    },

    atualizarPaciente: async (req, res) => {
        try {
            const { id } = req.params;
            const {nome, email, idade} = req.body;
    
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
            res.status(200).json('Cadastro de Paciente Atualizado.')
        } catch (err) {
            console.error(err);
        } 
    },

    deletarPaciente: async (req, res) => {
        const { id } = req.params;
        
        await Pacientes.destroy({
            where: {
                id,
            },
        });
        res.json('Cadastro de paciente deletado.') 
    }
};

module.exports = pacienteController;