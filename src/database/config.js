const Sequelize = require("sequelize");

const DB_NAME = "lavie"
const DB_USER = "root"
const DB_PASS = "root"
const DB_CONFG = {
    dialect: "mysql",
    host: "localhost",
    port: 3306
}

let db = {}

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFG)
} catch (error) {
    console.error('Sem conexão com banco de dados')
}

async function hasConection() {
    try {
        await db.authenticate();
        console.log("Banco de dados conectado")
    } catch (error) {
        console.error("Erro ao tentar realizar conexão com banco de dados novamente")
    }
}


Object.assign(db, {
    hasConection
});

module.exports ={
    db, 
    hasConection
};