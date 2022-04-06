var express = require('express');
var router = express.Router();
const Autor = require ("../models/autor");
const Livro = require ("../models/livro");

/* GET home page. */
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionar();
  res.json(autores.rows);
});

router.post('/inserir', async function(req, res, next) {
  const autores = await Autor.inserir(req.body);
  res.json(autores.rows);
});

router.put('/atualizar', async function(req, res, next) {
  const autores = await Autor.atualizar(req.body);
  res.json(autores.rows);
});

router.delete('/deletar', async function(req, res, next) {
  const autores = await Autor.deletar(req.body.id);
  res.json(autores.rows);
});

//livros
router.get('/livros', async function(req, res, next) {
  const livros = await Livro.selecionar_livro();
  res.json(livros.rows);
});

router.post('/inserirlivros', async function(req, res, next) {
  const livros = await Livro.inserir_livro(req.body);
  res.json(livros.rows);
});

router.put('/atualizarlivros', async function(req, res, next) {
  const livros = await Livro.atualizar_livro(req.body);
  res.json(livros.rows);
});

router.delete('/deletarlivros', async function(req, res, next) {
  const livros = await Livro.deletar_livro(req.body.id);
  res.json(livros.rows);
});

module.exports = router;