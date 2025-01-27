// INSTANCIANDO O APP DO ARQUIVO APP.JS
const app = require('./app');
// IMPORTANDO DOTENV E EXECUTANDO O METODO CONFIG PARA TER ACESSO AS VARIAVEIS DE AMBIENTE
require('dotenv').config();

// ACESSANDO A VARIAVEL DE AMBIENTE
const PORT = process.env.PORT || 3333;


// DEFINIR A PORTA DO SERVIDOR
app.listen(PORT, () => console.log(`Server está rodando na porta ${PORT}!`));