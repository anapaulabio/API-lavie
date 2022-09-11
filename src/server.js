const express = require('express');
const { hasConection } = require('./database/config');
const routes = require('./routes/routes');

const app = express();

app.use(express.json());
hasConection()

app.use(routes)

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})