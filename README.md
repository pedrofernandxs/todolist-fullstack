To-Do List Full Stack Application

Descrição

Este é um projeto Full Stack desenvolvido para criar uma aplicação de lista de tarefas (To-Do List). O objetivo principal foi aprofundar meus conhecimentos em integração de tecnologias e boas práticas no desenvolvimento de aplicações web. 🚀

Tecnologias Utilizadas

Back-End

Node.js: Ambiente de execução JavaScript no servidor.

Express: Framework para criação de APIs REST.

MySQL2: Biblioteca para interação com o banco de dados MySQL.

Docker: Utilizado para gerenciar o contêiner do banco de dados MySQL.

Nodemon: Ferramenta para reinicialização automática do servidor durante o desenvolvimento.

Dotenv: Gerenciamento de variáveis de ambiente.

Cors: Permitir requisições entre origens diferentes.

Testes de API

Insomnia: Ferramenta para testar os endpoints da API e garantir sua funcionalidade.

Front-End

HTML/CSS: Estruturação e estilização da aplicação.

JavaScript: Consumo da API e manipulação dinâmica dos dados exibidos.

Funcionalidades

Criar tarefas.

Listar tarefas existentes.

Atualizar tarefas.

Excluir tarefas.

Como Executar o Projeto

Requisitos

Node.js instalado

Docker configurado (para o banco de dados MySQL)

Gerenciador de pacotes npm ou yarn

Configuração do Back-End

Clone o repositório:

git clone https://github.com/seu-usuario/todolist-fullstack.git
cd todolist-fullstack

Instale as dependências:

npm install

Configure o arquivo .env com suas credenciais do banco de dados (utilizando Docker):

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua-senha
DB_NAME=todolist
DB_PORT=3306

Inicie o banco de dados no Docker:

docker-compose up -d

Execute o servidor:

npm run dev

Configuração do Front-End

Abra o arquivo index.html no navegador.

A aplicação consumirá os dados da API para exibir e manipular as tarefas.

Testes

Utilize o Insomnia ou outra ferramenta similar para testar os seguintes endpoints:

GET /tasks: Listar todas as tarefas.

POST /tasks: Criar uma nova tarefa.

PUT /tasks/:id: Atualizar uma tarefa existente.

DELETE /tasks/:id: Excluir uma tarefa.

Contribuições

Estou aberto a feedbacks, sugestões e contribuições para melhorar este projeto. Sintam-se à vontade para abrir issues ou enviar pull requests.

Agradecimentos

Agradecimento especial ao @manualdodev pelo suporte e apoio!

