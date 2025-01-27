// CRIA AS FUNÇOES QUE SÃO PASSADAS COMO SEGUNDO PARAMETRO PARA AS ROTAS
const tarefasModel = require('../models/tarefasModel');

const obterTodos = async (_request, response) => {
  const tarefas = await tarefasModel.obterTodos();
  return response.status(200).json(tarefas);
};

const cadastrarTarefa = async (request, response) => {
  const tarefaCriada = await tarefasModel.cadastrarTarefa(request.body);
  return response.status(201).json(tarefaCriada);
};

const deletaTarefa = async(request, response) => {
  const { id } = request.params; 
  await tarefasModel.deletaTarefa(id);
  return response.status(204).json();
};

const atualizaTarefa = async(request, response) => {
  const { id } = request.params;

  await tarefasModel.atualizaTarefa(id, request.body);
  return response.status(204).json();
};

const deletaTodasTarefas = async(request, response) => { 
  const tarefasDeletadas = await tarefasModel.deletaTodasTarefas();
  return response.status(200).json({
    message: `${tarefasDeletadas} tarefas deletadas com sucesso.`,
  });
};  


module.exports = {
  obterTodos,
  cadastrarTarefa,
  deletaTarefa,
  atualizaTarefa,
  deletaTodasTarefas
};