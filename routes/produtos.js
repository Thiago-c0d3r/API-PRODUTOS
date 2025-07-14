const express = require("express");
const router = express.Router(); //lembra dqla const app? ent, esse const router tem a mesma funcionalidade. só q o comando q usa nele é diferente, pq ele é específico para makar rotas

const { 
    listarProdutos, 
    cadastrarProduto,
    atualizarProduto,
    deletarProduto
} = require("../controllers/produtoController");//módulos product controller

const validarProduto = require("../middlewares/validarProduto");//modulo do middleware
//importando os módulos para usar nas rotas

router.get("/", listarProdutos);
router.post("/",validarProduto,cadastrarProduto);
router.put("/:id", validarProduto, atualizarProduto);
router.delete("/:id", deletarProduto);


module.exports= router;