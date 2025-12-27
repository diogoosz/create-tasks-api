
<h1 align="center" style="font-weight: bold;">Create Taks API</h1>

<p align="center">
<a href="#tech">Technologies</a>
<a href="#started">Getting Started</a>
<a href="#routes">API Endpoints</a>
<a href="#colab">Collaborators</a>
<a href="#contribute">Contribute</a> 
</p>


<p align="center">API com LOGIN e CRUD básico de criação de tarefas</p>


<p align="center">
<a href="https://github.com/diogoosz/create-tasks-api">📱 Visite o projeto</a>
</p>

<h2 id="technologies">💻 Technologies</h2>

- [![Node.js](https://skillicons.dev/icons?i=nodejs)](https://skillicons.dev)
- [![Express.js](https://skillicons.dev/icons?i=express)](https://skillicons.dev)

<h2 id="started">🚀 Getting started</h2>

Como você mesmo pode rodar localmente

<h3>Prerequisites</h3>

Todos os pré requisitos necessários para o projeto funcionar

- Node.js
- Express
- Nodemon

<h3>Cloning</h3>

Como clonar o projeto

```bash
git clone your-project-url-in-github
```

<h3>Config .env variables</h2>

Use the `.env.example` de referência para criar seu arquivo `.env` com suas credenciais AWS

```yaml
PORT=
MYSQLHOST=
MYSQLUSER=
MYSQLPASSWORD=
MYSQLDATABASE=
JWT_SECRET=
```

<h3>Starting</h3>

Como iniciar o projeto

```bash
cd project-name
npm run dev ou npm start
```

<h2 id="routes">📍 API Endpoints</h2>

Here you can list the main routes of your API, and what are their expected request bodies.
​
| rotas               | descrição                                          
|----------------------|-----------------------------------------------------
| <kbd>POST /register</kbd>     | registra um novo usuário
| <kbd>POST /login</kbd>     | faz o login
| <kbd>GET /tasks</kbd>     | busca todas as tarefas
| <kbd>POST /tasks</kbd>     | cria uma nova tarefa
| <kbd>PUT /tasks/:id</kbd>     | atualiza uma tarefa existente
| <kbd>DELETE /tasks/:id </kbd>     | Deleta uma tarefa

<h3 id="get-auth-detail">POST /register</h3>

**REQUEST**
```json
{
  "name": "Diogo Marciano",
  "email": "diogo@exemplo.com"
  "password": "12121212"
}
```
**RESPONSE**
```json
{
  "id": 1,
  "name": "Diogo Marciano",
  "message": "Usuário registrado com sucesso"
}
```

<h3 id="post-auth-detail">POST /login</h3>

**REQUEST**
```json
{
  "email": "diogo@exemplo.com",
  "password": "12121212"
}
```

**RESPONSE**
```json
{
  "id": 1,
  "name": "Diogo",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "message": "Bem-vindo de volta, Diogo!"
}
```
**Todas as rotas de tarefas exigem o header:
Authorization: Bearer <token>**

<h3 id="post-auth-detail">GET /tasks</h3>

**RESPONSE**
```json
{
  "id": 1,
   "title": "Comprar leite",
   "status": "pendente",
   "created_at": "2025-12-27T14:03:03.000Z",
}
```
<h3 id="post-auth-detail">POST /tasks</h3>

**REQUEST**
```json
{
  {
  "title": "Nova tarefa"
  "status": "pendente, em andamento ou concluída"
}
}
```
**RESPONSE**
```json
{
  "message": "Tarefa criada com sucesso!",
  "taskId": 3
}
```
<h3 id="post-auth-detail">PUT /tasks/:id</h3>

**REQUEST**
```json
{
  "title": "Comprar leite e pão",
  "status": "em andamento"
}
```
**RESPONSE**
```json
{
  "message": "Tarefa atualizada com sucesso"
}
```
<h3 id="post-auth-detail">PUT /tasks/:id</h3>

**REQUEST**
```json
{
  "title": "Comprar leite e pão",
  "status": "em andamento"
}
```
**RESPONSE**
```json
{
  Resposta (204): Sem conteúdo
}
```

<h2 id="colab">🤝 Collaborators</h2>

<p>Agradecimentos a todas as pessoas que tornaram esse projeto possível.</p>
<table>
<tr>

<td align="center">
<a href="https://https://github.com/diogoosz">
<img src="https://avatars.githubusercontent.com/u/103379831?s=400&u=2215e87a4d0187fcf3d433beaafd2408731456e2&v=4" width="100px;" alt="Diogo Marciano Profile Picture"/><br>
<sub>
<b>Diogo Marciano</b>
</sub>
</a>
</td>

</tr>
</table>
