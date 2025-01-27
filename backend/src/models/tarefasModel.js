const conexão = require('./conexão');
 
// FUNÇÃO PARA PEGAR OS DADOS DO BANCO
const obterTodos = async () => {
  // EXECUTA UMA QUERY NO BANCO DE DADOS // array destructor [tarefas] 1 posição
  const [tarefas] = await conexão.execute('SELECT * FROM tarefas');
  return tarefas;
};

// CADASTRAR/INSERIR NOVOS VALORES NA TABELA NO BANCO DE DADOS
const cadastrarTarefa = async (tarefa) => {
  // RETIRAR O TITULO
  const { titulo } = tarefa;
  const queryBD = 'INSERT INTO tarefas(titulo, status, criado_em) VALUES (?, ?, ?)';
  
  // CRIANDO A DATA EM UTC PARA CADASTRAR NO BANCO
  const dateUTC = new Date(Date.now()).toUTCString();
  const [tarefaCriada] = await conexão.execute(queryBD, [titulo, 'pendente', dateUTC]);
  return {insertId: tarefaCriada.insertId};
};

// DELETAR NA TABELA DO BANCO DE DADOS
const deletaTarefa = async (id) => {
  const [tarefaRemovida] = await conexão.execute('DELETE FROM tarefas WHERE id = ?', [id]);
  return tarefaRemovida;
};

// ATUALIZAR OS VALORES NA TABELA
const atualizaTarefa =  async (id, tarefa) => {
  const { titulo, status } = tarefa;
  
  const query = 'UPDATE tarefas SET titulo = ?, status = ? WHERE id = ?';
  const [tarefaAtualizada] = await conexão.execute(query, [titulo, status, id]);
  return tarefaAtualizada;
};

// DELETAR TODAS AS TAREFAS
const deletaTodasTarefas = async () => {
  const [result] = await conexão.execute('DELETE FROM tarefas');;
  return result;
};

module.exports = {
  obterTodos,
  cadastrarTarefa,
  deletaTarefa,
  atualizaTarefa,
  deletaTodasTarefas
};