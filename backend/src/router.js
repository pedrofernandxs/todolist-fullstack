// IMPORTAR EXPRESS
const express = require('express');

const tarefasController = require('./controllers/tarefasController');
const tarefasMiddleware = require('./middlewares/tarefasMiddleware');
// INSTACIANDO O ROUTER
const router = express.Router();

// CRIANDO AS ROTAS HTTP
router.get('/tarefas', tarefasController.obterTodos);
router.post('/tarefas', tarefasMiddleware.validarTitulo, tarefasController.cadastrarTarefa);
router.put('/tarefas/:id', 
  tarefasMiddleware.validarTitulo, 
  tarefasMiddleware.validarStatus, 
  tarefasController.atualizaTarefa
);
router.delete('/tarefas/all', tarefasController.deletaTodasTarefas); // Deleta todas as tarefas
router.delete('/tarefas/:id', tarefasController.deletaTarefa); // Deleta por ID


// EXPORTANDO O ROUTER
module.exports = router;