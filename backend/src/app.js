// CRIAR O SERVIDOR
const express = require('express');
const router = require('./router');
const cors = require('cors');
// INSTANCIAR O SERVIDOR
const app = express();

// FAZ COM QUE A API SAIBA LIDAR COM JSON
app.use(express.json());

// FAZ COM QUE QUALQUER USUARIO TENHA ACESSO A API
app.use(cors());

// SEMPRE UTILIZAR O ROUTER ANTES DE INICIAR
app.use(router);

// EXPORTANDO APP PARA UTILIZAR EM OUTRO ARQUIVO
module.exports = app;