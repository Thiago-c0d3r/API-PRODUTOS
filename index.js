const express= require("express");
const app= express();
app.use(express.json());//permite leitura de JSON
const rotaProdutos= require ("./routes/produtos"); //importa módulo de rotas
//dentro da variável rotaProdutos tem o módulo de rotas que foi feito no routes

app.use("/produtos", rotaProdutos); //toda vez que alguém acessar uma rota com  /produtos, irá escolher o metodo e se  redirecionado para o metodo escolhido
//POST: local onde o user envia os dados
//GET: local onde o user vizualiza os dados enviados

app.listen(3002, ()=>{
    console.log("servidor rodando em http://localhost:3002");
});