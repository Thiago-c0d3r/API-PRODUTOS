function validarProduto(req,res,next){
    const { nome,preco } =req.body;
    
    if (!nome || !preco){
        return res.status(400).json({erro: "nome e preço obrigatórios"});
    }
    
    next();
}
module.exports = validarProduto;