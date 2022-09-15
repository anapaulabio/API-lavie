const express = require('express');
const pacientesController = require('../controller/pacienteController');
const psicologosController = require("../controller/psicologosController");
const atendimentosController = require('../controller/atendimentosController');
const authController = require ("../controller/authController");

const psicologosCreateValidation = require ("../validations/create");
const pacientesCreateValidation = require ("../validations/pacienteCreate");
const ateCreateValidation = require ("../validations/atendimentoCreate");
const authLoginValidation = require ("../validations/login");
const auth = require ("../middlewares/auth");

const routes = express.Router();

/* - CRUD - Psicólogos - */
routes.get("/psicologos", psicologosController.listPsychologists);
routes.get("/psicologos/:id", psicologosController.listPsychologistsID);
routes.post("/psicologos",psicologosCreateValidation, psicologosController.createPsychologist);
routes.put("/psicologos/:id",psicologosCreateValidation , psicologosController.updatePsychologist);
routes.delete("/psicologos/:id", psicologosController.deletePsychologist)

/* - CRUD - Atendimentos - */
routes.get('/atendimentos', atendimentosController.listAtendimento);
routes.get('/atendimentos/:id', atendimentosController.listOne);
routes.post('/atendimentos',ateCreateValidation, auth, atendimentosController.createAtendimento);

/* - CRUD - Pacientes - */
routes.post('/pacientes',pacientesCreateValidation,pacientesController.cadastrarPaciente);
routes.get('/pacientes',pacientesController.listarPacientes);
routes.get('/pacientes/:id',pacientesController.listarPacienteId);
routes.put('/pacientes/:id',pacientesCreateValidation,pacientesController.atualizarPaciente);
routes.delete('/pacientes/:id',pacientesController.deletarPaciente);

/* - Dashboard - */
routes.get('/dashboard/numero-paciente', pacientesController.countPacientes);
routes.get('/dashboard/numero-psicologo', psicologosController.countPsicologos);
routes.get('/dashboard/numero-atendimentos', atendimentosController.countAtendimentos);
routes.get('/dashboard/media-atendimentos', atendimentosController.averageAtendimentos);

routes.post("/login", authLoginValidation, authController.login);

module.exports = routes;