const express = require('express');

const psicologosController = require("../controller/psicologosController");

const routes = express.Router();


routes.get("/psicologos", psicologosController.listPsychologists);
routes.get("/psicologos/:id", psicologosController.listPsychologistsID);
routes.post("/psicologos", psicologosController.createPsychologist);
routes.delete("/psicologos/:id", psicologosController.deletePsychologist)
routes.put("/psicologos/:id", psicologosController.updatePsychologist);


module.exports = routes;