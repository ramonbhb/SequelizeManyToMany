const { Router } = require('express');
const FilmeController = require("../controllers/FilmeController");
const AtorController = require("../controllers/AtorController");
const routes = Router();

routes.get('/', (req,res) => {
    res.status(200).json({mensagem: "Hello World"})
});

routes.get('/filmes', FilmeController.getAll);
routes.post('/filme', FilmeController.create);
routes.get('/atores', AtorController.getAll);
routes.post('/ator', AtorController.create);
routes.post('/ator/filme', AtorController.addFilmes);

module.exports = routes;