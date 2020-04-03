:smiley:
# GoBarber - API
[![N|GoBarber](https://github.com/andrelinos/gobarber-api/blob/master/logogobarber.png?raw=true)](https://github.com/andrelinos/)

# Bancos de dados
## Redis
```sh
- docker run --name redisbarber -p 6379:6379 -d -t redis:alpine
```
## Mongo
```sh
docker run --name mongobarber -p 27017:27017 -d -t mongo
```


# Comandos iniciais
```sh
  - docker start database // inicia o banco de dados da aplicação
  - docker start mongobarber // inicia o banco não relacional para controle de agendamentos


  - yarn dev // rodar a aplicação na api
  - yarn queue // tratar as filas de cancelamento e envio de e-mail
  - yarn start // executa a aplicação no browser
```

## Acessos externos
```sh
  - mailtrap.io // servidor de e-mail para testes de envio de e-mail para cancelamentos
  - sentry.io // Usado para receber relatório dos erros da aplicação
```
## Aplicativos para visualizar banco de dados

  - Postbird // visualiza o banco de dados de modo geral
  - MongoDB Compas // visualiza o banco de dados dos agendamentos


### Dicas de alguns erros:
  - Apagar todos os agendamentos e criar novos por meio de rodar a migrate do zero

# A verificar
  - Não permitir cancelar mais de uma vez o mesmo agendamento


### Rotas
- ListUser: {{ base_url  }}/users
- CreateUser: {{ base_url  }}/users
- Login: {{ base_url  }}/sessions
- UpdateUser: {{ base_url  }}/users
- Files: {{ base_url  }}/files

### Parâmetros:
- Login:
```js
{
	"email":"user@site.com",
	"password": "123456"
}
```
- CreateUser:
```js
{
	"name":"User Name"	,
	"email":"user@site.com",
	"password":"123456"
}
```
- UpdateUser:
```js
{
	"name":"User Name",
	"email":"user@site.com",
	"oldPassword": "123456",
	"password": "123456789",
	"confirmPassword": "123456789"
}
```

### Dependecies
```js
"dependencies": {
    "@sentry/node": "5.9.0",
    "bcryptjs": "^2.4.3",
    "bee-queue": "^1.2.2",
    "cors": "^2.8.5",
    "date-fns": "^2.0.0-beta.5",
    "dotenv": "^8.2.0",
    "eslint-config-airbnb": "^18.0.1",
    "eslint-plugin-flowtype": "^4.3.0",
    "eslint-plugin-jsx-a11y": "^6.2.3",
    "eslint-plugin-react": "^7.16.0",
    "express": "^4.17.1",
    "express-async-error": "^0.0.2",
    "express-async-errors": "^3.1.1",
    "express-handlebars": "^3.1.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.7.7",
    "multer": "^1.4.2",
    "nodemailer": "^6.3.1",
    "nodemailer-express-handlebars": "^3.1.0",
    "pg": "^7.12.1",
    "pg-hstore": "^2.3.3",
    "sequelize": "^5.21.1",
    "youch": "^2.0.10",
    "yup": "^0.27.0"
  },
```
### devDependencies
```js
 "devDependencies": {
    "eslint": "^6.5.1",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-config-prettier": "^6.4.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-prettier": "^3.1.1",
    "nodemon": "^1.19.4",
    "prettier": "^1.18.2",
    "sequelize-cli": "^5.5.1",
    "sucrase": "^3.10.1"
  }
```

License
----

MIT
