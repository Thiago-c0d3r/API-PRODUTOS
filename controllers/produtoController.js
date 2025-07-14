const pool = require("../database/conexao"); // Importa a conexão com o banco

// ✅ GET /produtos → Listar todos os produtos
const listarProdutos = async (req, res) => {
  try {
    const resultado = await pool.query("SELECT * FROM produtos");
    return res.status(200).json(resultado.rows); // retorna um array de produtos
  } catch (erro) {
    console.error("Erro ao listar produtos:", erro);
    return res.status(500).json({ erro: "Erro ao buscar produtos." });
  }
};

// ✅ POST /produtos → Cadastrar um novo produto
const cadastrarProduto = async (req, res) => {
  const { nome, preco } = req.body;

  if (!nome || !preco) {
    return res.status(400).json({ erro: "Nome e preço são obrigatórios." });
  }

  try {
    
    const valores = [nome, preco];
    const resultado = await pool.query(`
      INSERT INTO produtos (nome, preco)
      VALUES ($1, $2)
      RETURNING *;
    `, [nome,preco]);

    return res.status(201).json({
      mensagem: "Produto cadastrado com sucesso!",
      produto: resultado.rows[0],
    });
  } catch (erro) {
    console.error("Erro ao cadastrar produto:", erro);
    return res.status(500).json({ erro: "Erro ao cadastrar produto." });
  }
};

//ROTA PUT
const atualizarProduto = async function (req,res) {
  const {id}= req.params;
  const {nome,preco}= req.body;

  if (!nome || !preco){
    return res.status(400).json({erro:"Nome e preço são obrigatórios!"});
  }
  try{
    const produtoExistente = await pool.query('SELECT * FROM produtos WHERE id = $1', [id]);
    
    if (produtoExistente.rowCount===0){
      return res.status(404).json({erro:"O produto não foi encontrado"})
    }
    
    const resultado= await pool.query(
      "UPDATE produtos SET nome =$1, preco=$2 WHERE id = $3",[id,nome, preco]
    );

    return res.status(200).json({mensagem:"Produto atualizado com sucesso!", produto:resultado.rows[0]});
  }
  catch(erro){
    console.error("Erro ao atualizar produto",erro);
    return res.status(500).json({erro:"Erro ao atualizar o produto"})
  }
}

//ROTA DELETE
  const deletarProduto= async function (req,res) {
    const {id}= req.params;
    
    try{
      const resultado= await pool.query("DELETE FROM produtos WHERE id = $1 RETURNING *",[id]);

      if (resultado.rowCount===0){
        return res.status(404).json({erro:"Produto não encontrado"});
      };

      return res.status(200).json({
        mensagem:"Produto deletado com sucesso!",
        produto:resultado.rows[0]
      });
    }
    catch(erro){
      console.error("Erro ao deletar produto", erro)
      res.status(500).json({erro:"Erro ao deletar produto!"})
    }
  }
module.exports = {
  listarProdutos,
  cadastrarProduto,
  atualizarProduto,
  deletarProduto
};
