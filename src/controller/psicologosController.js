const Psicologos = require("../models/psicologos")

const psicologosController = {
async cadastrarPsicologos (req, res) {

    try {
        const { nome, senha, email, apresentacao } = req.body;
        const novaSenha = (senha, 10);
        const novoPsicologo = await Psicologos.create ({
            nome,
            senha,
            email,
            apresentacao,
        });
        return res.status(201).json(novoPsicologo);

    } catch (error) {
        res.status(400).json("Não foi possível cadastrar o novo psicólogo");
        console.log(error);
    }
}
};