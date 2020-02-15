# Base de uma aplicação web feita em Node.Js

Esqueleto de uma api web, com banco de dados integrado e autenticação

## Características

- A aplicação principal o o banco de dados são configuradas em contâiners [Docker](https://www.docker.com/);
- Utiliza o banco de dados [Postgres](https://www.postgresql.org/);
- Utiliza o ORM [Sequelize](https://sequelize.org/) para abstraçao do banco de dados;
- Utiliza o jest para testes;
- Possui coleta de cobertura dos testes. Vide [documentação](https://jestjs.io/docs/en/configuration);
- Possui autenticação utilizando [JWT](https://jwt.io/) token;
- Implementa o framework [Express](https://expressjs.com/pt-br/);
- Possui um modelo de `User`, como exemplo;
- Somente em ambiente de desenvolvimento e teste, utiliza as dependências [dotenv](https://www.npmjs.com/package/dotenv) e [dotenv-expand](https://github.com/motdotla/dotenv-expand) para gerenciar as variáveis de ambiente da aplicação. O arquivo `.env` possui as variáveis de ambiente;
- Todas as respostas do servidor são em [JSON](https://www.json.org/json-pt.html).

## Dependências

- [Yarn](https://yarnpkg.com/) - gerenciador de dependência;
- [Docker Compose](https://docs.docker.com/compose/) - gerenciador de contâiners;

## Rotas

`/`: (GET) Retorna um JSON `{ hello: 'World!' }`

`/user`: (GET) Retorna todos os usuários cadastrados

`/user`: (POST) Cria um usuário no banco. O corpo deve estar no formato abaixo:

```json
{
  "name": "User Name",
  "email": "user@email.com",
  "password": "user-password"
}
```

`/session`: (POST) Faz login com usuário e senha de um usuário. O corpo deve estar no formato abaixo:

```json
{
  "email": "user@email.com",
  "password": "user-password"
}
```

`/dashboard`: (GET) Autenticada com token. Acessa os dados do usuário logado

## Execução

Para montar o ambiente, basta executar:

- `docker-compose up -d` para a criação dos containers;
- `yarn d_console` para entrar no contâiner;
- `yarn start` para iniciar o servidor;
- Vai estar executando no endereço `localhst:5000`;

Também é possível executar comandos no sevidor fora do contâiner, com o `yarn start`. Neste caso, o servidor vai estar executando no endereço `localhst:3000`

## Portas

- O servidor Postgres dentro do container da aplicação, está disponível na porta `5432`;
- O servidor Postgres fora do container da aplicação, está disponível na porta `5454`;
- O servidor da aplicação, se executado dentro do contâiner, está disponível na porta `5000`;
- O servidor da aplicação, se executado fora do contâiner, está disponível na porta `3000`;
