const express = require('express');
<<<<<<< HEAD
const { hasConection } = require('../src/database/config');
const routes = require('../src/routes/routes');
=======
const { hasConection } = require('./database/config');
const handleError = require ("./middlewares/handleError");
const routes = require('./routes/routes');
>>>>>>> main

const app = express();

app.use(express.json());
hasConection()

app.use(routes)
<<<<<<< HEAD
=======
app.use(handleError);
>>>>>>> main

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});