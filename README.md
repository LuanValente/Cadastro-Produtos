# API de Gerenciamento de Produtos

## Objetivo

O objetivo deste projeto é construir uma API RESTful simples utilizando Node.js e Express que permite realizar operações CRUD (Create, Read, Update, Delete) em uma entidade chamada "Produtos". Cada produto possui os seguintes campos: id, nome, descrição, preço e data de criação. Adicionalmente, um frontend em React.js foi desenvolvido para consumir esta API, permitindo que o usuário visualize, adicione, atualize e delete produtos.

## Estrutura do Projeto

- **Backend:** Node.js, Express, Sequelize, MySQL
- **Frontend:** React.js, Axios 

## Funcionalidades

- **API RESTful** com operações CRUD para a entidade "Produtos".
- **Validação de dados** na criação e atualização de produtos.
- **Tratamento de erros** adequado para garantir Qualidade.
- **Frontend em React.js** para consumir a API e gerenciar produtos.

## Requisitos

- Node.js (versão 14 ou superior)
- MySQL
- NPM (Node Package Manager) ou Yarn

## Instalação e Configuração de uso local

### Backend

1. Clone o repositório:

    ```bash
    git clone https://github.com/LuanValente/Cadastro-Produtos
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure o banco de dados no arquivo `config/database.js`:

    ```javascript
    import { Sequelize } from 'sequelize';

    const sequelize = new Sequelize('nome_banco', 'Usuario', 'Senha', {
      host: 'localhost',
      dialect: 'mysql'
    });

    export default sequelize;
    ```

4. Sincronize o banco de dados e inicie o servidor:

    ```bash
    npm start
    ```

O backend estará disponível em `http://localhost:3001`.

### Frontend

1. Navegue para o diretório do frontend:

    ```bash
    cd frontend
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:

    ```bash
    npm start
    ```

O frontend estará disponível em `http://localhost:3000`.
**LEMBRANDO RODE O FRONTEND E O BACKEND JUNTOS UM EM CADA TERMINAL**

## Uso pela Net 
Basta acessar este link para ver a aplicação pela web : https://cadastroprodutoapp.netlify.app/

### Endpoints da API

- **GET /products**: Retorna a lista de produtos.
- **GET /products/:id**: Retorna um produto específico por ID.
- **POST /products**: Cria um novo produto.
- **PUT /products/:id**: Atualiza um produto existente.
- **DELETE /products/:id**: Deleta um produto.

### Interface do Usuário

A interface do usuário permite visualizar a lista de produtos, adicionar novos produtos, atualizar produtos existentes e deletar produtos. Use os formulários e botões disponíveis na interface para realizar essas operações.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias, correções de bugs ou novas funcionalidades.


