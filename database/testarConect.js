const pool = require("./conexao");
(async ()=>{
    try{
        const resultado = await pool.query("SELECT NOW()");
        console.log("conectado ao banco com sucesso!", resultado.rows[0]);
    }catch (error){
        console.error("Erro ao conectar ao banco:",error.message);
    }
})
();

/*
async/await= a função async foi feita para podermos usar o await, await usado para esperar processos grandes serem executados para partir para o resto da execução 

.query= comando nativo do pg do node q envia um comando para o banco de dados

SELECT NOW()=comando SQL que retorna o horário atual do banco

resultado= variável usada para retornar um objeto com os dados

.rows= ele que transforma em objetos os dados
 */