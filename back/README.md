# Desafio - Fullstack

Repositório do Desafio Fullstack, onde a intenção é criar uma agenda de contatos online.

## Sumário

- [Instalação back](#instalação)
- [Documentação API](#documentação-api)
- [Uso Local](#uso-local)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação front](#instalação-front)

## Instalação back

1. Faça um clone do repositório:

```bash
git clone https://github.com/JulianaDiorio/phonebook
```

2. Acesse o diretório do projeto colocando o seguinte comando no terminal:

```bash
cd back
```

3. Em seguida, instale as dependências do projeto:

```bash
yarn install
```

4. Crie um banco de dados PostgreSQL;

## Documentação API

1. POST - Criação de Usuário:
   Rota: users/

Exemplo de request:

```bash
{
    "name": "Juliana",
    "email": "juliana@mail.com",
	"phone": "(41)99999-9999",
    "password": "Kenzie-13"
}
```

2. PATCH - Atualização de Usuário:
   Rota: users/:id

Exemplo de request:

```bash
{
    "name": "Juliana",
    "email": "juliana@mail.com",
	"phone": "(41)99999-9999"
}
```

3. POST - Login:
   Rota: login/

Exemplo de request:

```bash
{
    "email": "juliana@mail.com",
    "password": "Kenzie-13"
}
```

4. GET - Listar contatos:
   Rota: contacts/

5. POST - Criação de contato:
   Rota: contacts/

Exemplo de request:

```bash
{
    "name": "Kenzie",
    "email": "kenzie@mail.com",
	"phone": "(41)99999-9998"
}
```

6. PATCH - Atualização de contato:
   Rota: contacts/:id

Exemplo de request:

```bash
{
    "name": "Kenzie",
    "email": "kenzie@mail.com",
	"phone": "(41)99999-9998"
}
```

7. DELETE - Deletar contato:
   Rota: contacts/:id

## Uso Local

1. Configure o banco de dados PostgreSQL, seguindo o modelo do arquivo .env.example., crie um arquivo chamado .env e configure as informações de acesso.

2. Execute as migrations do banco de dados:

```bash
yarn typeorm migration:run -d src/data-source.ts
```

3. Inicie o servidor, em caso de sucesso, você verá a mensagem "Servidor executando", para isso, rode o comando:

```bash
yarn dev
```

4. As rotas podem ser acessadas pelo endereço:

```bash
http://localhost:3000
```

## Tecnologias Utilizadas

Node.js

- TypeScript
- TypeORM
- Express
- PostgreSQL
- bcryptjs;
- jsonwebtoken;

## Instalação Front

1. Mantenha o terminal da api rodando aberto, e em outro terminal acesse a pasta do front pelo comando:

```bash
cd front
```

2. Em seguida, instale as dependências do projeto:

```bash
yarn
```

3. Para que seja aberta uma aba no navegador, rodando a aplicação do front-end, execute o comando:

```bash
yarn start
```

Após isso, a integração entre back e front-end deve estar funcionando.
