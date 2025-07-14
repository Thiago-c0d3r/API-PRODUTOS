const {Pool}=require("pg"); //pegando a ferramenta pool do pg q faz a conversa com o banco de dados

const pool = new Pool({
    host:"localhost",
    port: 5432,
    user: "postgres",
    password: "postgres",
    database:"apiprodutos"
});
//o pool faz conexão com o banco de dados através dos dados q sao fornecidos sobre o banco de dados
module.exports= pool;