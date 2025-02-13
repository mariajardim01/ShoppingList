# Shopping List

Este é um projeto simples de uma API REST para gerenciar uma lista de compras.
A aplicação foi desenvolvida utilizando **Node.js** com **Express**.

## Tecnologias Utilizadas
- **Node.js**
- **Express.js**
- **http-status**

## Instalação
1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/shopping-list.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd shopping-list
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```

## Como Executar
Para iniciar o servidor, utilize o seguinte comando:
```sh
npm start
```
A aplicação rodará na porta **5000** por padrão.

## Endpoints
### Criar um item na lista de compras
```http
POST /items
```
#### Request Body (JSON):
```json
{
  "name": "Arroz",
  "quantity": 2,
  "type": "Alimento"
}
```
#### Respostas:
- **201 Created** - Item cadastrado com sucesso.
- **409 Conflict** - O item já está cadastrado.
- **422 Unprocessable Entity** - Campos obrigatórios ausentes.

---

### Listar todos os itens
```http
GET /items
```
#### Respostas:
- **200 OK** - Retorna todos os itens cadastrados.

---

### Filtrar itens por tipo
```http
GET /items?type=Alimento
```
#### Respostas:
- **200 OK** - Retorna apenas os itens do tipo especificado.

---

### Buscar item por ID
```http
GET /items/:id
```
#### Parâmetros:
- `id` - ID do item.

#### Respostas:
- **200 OK** - Retorna o item encontrado.
- **400 Bad Request** - O ID fornecido é inválido.
- **404 Not Found** - Nenhum item foi encontrado com esse ID.

## Autor
Criado por [Maria Jardim R.](https://github.com/mariajardim01).
