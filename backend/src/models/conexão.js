// IMPORTANDO O MYSQL
const mysql = require('mysql2/promise');

require('dotenv').config();

// CRIAR A CONEXÃO - POOL = LISTA DE CONEXÕES
const conexão = mysql.createPool({
  // PUXANDO AS INFORMAÇÕES PRIVADAS DO ARQUIVO .ENV
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
});

// EXPORTANDO A CONEXÃO
module.exports = conexão;
