# API de Produtos

Esta API permite criar, atualizar, listar e deletar produtos. Veja os comandos cURL abaixo para cada operação:

### 1. Listar todos os produtos

curl -X GET http://localhost:3000/api/products

2. Obter um produto pelo ID

curl -X GET http://localhost:3000/api/products/{id}

3. Criar um novo produto

curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name": "Product Name", "price": 100}'

4. Atualizar um produto pelo ID

curl -X PUT http://localhost:3000/api/products/{id} \
  -H "Content-Type: application/json" \
  -d '{"name": "Updated Product", "price": 150}'

5. Deletar um produto pelo ID


curl -X DELETE http://localhost:3000/api/products/{id}

### Rodando o projeto

```bash
node app.js

Essa estrutura básica fornece todas as operações CRUD para a API de produtos.