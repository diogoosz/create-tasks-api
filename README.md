# Documentação da API de Tasks

Base URL: `https://create-tasks-api-production.up.railway.app/`

## Headers Recomendados

Para todas as requisições, recomenda-se definir os seguintes headers:

    Accept: application/json
    Content-Type: application/json

------------------------------------------------------------------------

## GET /tasks

Retorna a lista de tasks armazenadas no banco de dados.

### Exemplo de Requisição

    GET /tasks
    Accept: application/json

### Exemplo de Resposta

``` json
[
  {
    "id": 1,
    "title": "Exemplo",
    "status": "pendente"
  }
]
```

------------------------------------------------------------------------

## POST /tasks

Cria uma nova task.

### Body (obrigatório)

``` json
{
  "title": "Nome da tarefa",
  "status": "pendente | em andamento | concluído"
}
```

### Exemplo de Requisição

    POST /tasks
    Accept: application/json
    Content-Type: application/json

### Exemplo de Resposta

``` json
{
  "id": 10,
  "title": "Nome da tarefa",
  "status": "pendente"
}
```

------------------------------------------------------------------------

## PUT /tasks/{id}

Substitui os dados de uma task existente.

### Body (somente título --- obrigatório)

``` json
{
  "title": "Novo título"
}
```

### Exemplo de Requisição

    PUT /tasks/1
    Accept: application/json
    Content-Type: application/json

------------------------------------------------------------------------

## DELETE /tasks/{id}

Remove uma task pelo ID.

### Exemplo de Requisição

    DELETE /tasks/1
    Accept: application/json

### Exemplo de Resposta

``` json
{
  "message": "Task removida com sucesso"
}
```

------------------------------------------------------------------------
