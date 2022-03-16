var express = require('express');
var router = express.Router();
const Autor = require ("../models/autor");

/* GET home page. */
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionar();
  res.json(autores.rows);
});

router.post('/inserir', async function(req, res, next) {
  let autor = {
    nome:"Ana",
    sobrenome:"Nicoletti",
    datanascimento:"2002-12-12"
  };
  const autores = await Autor.inserir(autor);
  res.json(autores.rows);
});

router.get('/atualizar', async function(req, res, next) {
  let autor = {
    nome:"Ana",
    sobrenome:"Nicoletti",
    datanascimento:"2002-09-11"
  };
  const autores = await Autor.atualizar(autor, 6);
  res.json(autores.rows);
});

module.exports = router;