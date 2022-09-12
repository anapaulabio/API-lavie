const express = require('express');
const pacienteController = require('../controller/pacienteController');


const psicologoController = require();
const atendimentoController = require();

const routes = express.Router();

/*----- CRUD - Pacientes -----*/

/*----- Create -----*/
routes.post('/pacientes',pacienteController.cadastrarPaciente);

/*----- Read -----*/
routes.get('/pacientes',pacienteController.listarPacientes);
routes.get('/pacientes/:id',pacienteController.listarPacienteId); //Procura por ID

/*----- Update -----*/
routes.put('/pacientes/:id',pacienteController.atualizarPaciente);

/*----- Delete -----*/
routes.delete('/pacientes/:id',pacienteController.deletarPaciente);




module.exports = routes;