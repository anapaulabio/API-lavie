const express = require('express');

const pacienteController = require();
const psicologosController = require("../controller/psicologosController");
const atendimentoController = require();


const routes = express.Router();

routes.get("/psicologos/listar", psicologosController.listarPsicologos);
routes.post("/psicologos/cadastrar", psicologosController.cadastrarPsicologos);
routes.put("/psicologos/atualizar", psicologosController.atualizarPsicologos);
routes.delete("/psicologos/deletar", psicologosController.deletarPsicologos)


module.exports = routes;