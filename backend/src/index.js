const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // O ./ serve para referenciar que é um arquivo e não um pacote, como o express

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// recurso é o que vem depois da / na url

/**
 * metodos HTTP:
 * 
 * GET > Buscar/listar informação no backend
 * POST > Criar uma informação no backend
 * PUT > Alterar uma informação no backend
 * DELETE > Deletar uma informação no backend
 */

/**
 * Tipos de Parâmetros:
 * 
 * Query: Parametros nomeados enviados na rota após o simbolos de identificação (? e &), para filtros, paginação, etc.
 * Route: Parametros para identificar recursos, com o id (/user/:id)
 * Request Body: Corpo da requisição, utilizado para criar ou atualizar usuários.   
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

app.listen(3333);
