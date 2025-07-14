# 🧩 CRUD de Produtos com Node.js + Express + PostgreSQL

API RESTful simples e funcional para cadastro de produtos, construída com foco em boas práticas, organização e integração com banco de dados PostgreSQL. Perfeita para projetos iniciais de back-end com persistência real.

## 🚀 Tecnologias Utilizadas

- Node.js  
- Express  
- PostgreSQL  
- pg (node-postgres)  
- Docker (com Docker Compose)  
- Insomnia (testes de rota)

## 📦 Funcionalidades

- [x] Listar todos os produtos (GET /produtos)
- [x] Cadastrar novo produto (POST /produtos)
- [x] Atualizar produto (PUT /produtos/:id)
- [x] Deletar produto (DELETE /produtos/:id)
- [x] Middleware para validação de entrada
- [x] Organização em controllers, rotas, middlewares e banco
- [x] Conexão com banco real via pool.query

## 🧠 Requisitos para rodar localmente

- Node.js 16+
- PostgreSQL 13+ ou Docker
- Insomnia (ou Postman) para testes
- Git

## 🐳 Como rodar com Docker

### 1. Clone o projeto

```bash
git clone https://github.com/Thiago-c0d3r/CRUD-SIMPLES.git
cd CRUD-SIMPLES
```

### 2. Crie o arquivo .env

```env
DB_USER=postgres
DB_PASSWORD=1234
DB_NAME=apiprodutos
DB_PORT=5432
```

### 3. Suba os containers

```bash
docker-compose up
```

### 4. Acesse a API

```
GET http://localhost:3002/produtos
```

## 🗃️ Exemplo de JSON para POST

```json
{
  "nome": "Mouse Gamer RGB",
  "preco": 189.90
}
```

## 📂 Estrutura de pastas

```
src/
├── controllers/
├── database/
├── middlewares/
├── routes/
├── index.js
└── ...
```

## 🤝 Contribuições

Este projeto foi desenvolvido como parte do meu aprendizado e portfólio para mercado de trabalho como dev back-end júnior.  
Contribuições, feedbacks e sugestões são super bem-vindas!

## 🧑‍💻 Autor

Feito com dedicação por [Thiago Sousa](https://github.com/Thiago-c0d3r) 🧠🚀
