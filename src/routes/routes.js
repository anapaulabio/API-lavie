const express = require('express');
const pacienteController = require('../controller/pacienteController');
const psicologosController = require("../controller/psicologosController");
const atendimentosController = require('../controller/atendimentosController');

const authController = require ("../controller/authController");
const psicologosCreateValidation = require ("../validations/create");
const authLoginValidation = require ("../validations/login");
const auth = require ("../middlewares/auth");

const routes = express.Router();

routes.get("/psicologos/listar", auth, psicologosController.listarPsicologos);
routes.post("/psicologos/cadastrar", psicologosCreateValidation, psicologosController.cadastrarPsicologos);
routes.post("/login", authLoginValidation, authController.login);
routes.put("/psicologos/atualizar", auth, psicologosCreateValidation, psicologosController.atualizarPsicologos);
routes.delete("/psicologos/deletar", auth, psicologosController.deletarPsicologos);

routes.get('/atendimentos', atendimentosController.listAtendimento);
routes.get('/atendimentos/:id', atendimentosController.listOne);
routes.post('/atendimentos', auth, atendimentosController.registerAtendimento);

routes.post('/pacientes',pacienteController.cadastrarPaciente);
routes.get('/pacientes',pacienteController.listarPacientes);
routes.get('/pacientes/:id',pacienteController.listarPacienteId);
routes.put('/pacientes/:id',pacienteController.atualizarPaciente);
routes.delete('/pacientes/:id',pacienteController.deletarPaciente);


module.exports = routes;