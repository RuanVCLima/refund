# 💰 Refund API

API REST desenvolvida em **Node.js + TypeScript** para gerenciamento de solicitações de reembolso.

O projeto foi desenvolvido com o objetivo de praticar conceitos de desenvolvimento backend, como autenticação, autorização, validação de dados, upload de arquivos, persistência de dados e organização de uma API.

## 🚀 Sobre o projeto

A **Refund API** é uma aplicação backend responsável pelo gerenciamento de solicitações de reembolso.

Entre as funcionalidades desenvolvidas estão:

- Cadastro de usuários;
- Autenticação de usuários;
- Criptografia de senhas;
- Autenticação utilizando JWT;
- Validação de permissões por função;
- Validação de dados;
- Solicitação de reembolsos;
- Upload de arquivos;
- Armazenamento de arquivos;
- Integração com banco de dados;
- Tratamento de erros;
- Configuração de CORS.

## 🛠️ Tecnologias utilizadas

- **Node.js**
- **TypeScript**
- **Express**
- **Prisma ORM**
- **SQLite**
- **JSON Web Token (JWT)**
- **bcrypt**
- **Zod**
- **Multer**
- **CORS**

### Principais dependências

| Tecnologia | Utilização |
|---|---|
| Node.js | Ambiente de execução |
| TypeScript | Tipagem estática |
| Express | Criação da API REST |
| Prisma | ORM e acesso ao banco de dados |
| SQLite | Banco de dados |
| JWT | Autenticação |
| bcrypt | Criptografia de senhas |
| Zod | Validação de dados |
| Multer | Upload de arquivos |
| CORS | Controle de requisições entre origens |

As versões utilizadas no projeto incluem Express `5.2.1`, Prisma `7.10.0`, Multer `2.4.0`, Zod `4.6.5` e TypeScript `5.9.3`. :contentReference[oaicite:1]{index=1}

## 📁 Estrutura do projeto

```text
refund/
│
├── prisma/
│
├── src/
│   ├── configs/
│   │
│   ├── controllers/
│   │
│   ├── database/
│   │
│   ├── middlewares/
│   │
│   ├── providers/
│   │
│   ├── routes/
│   │
│   ├── types/
│   │
│   ├── utils/
│   │
│   ├── app.ts
│   └── server.ts
│
├── .gitignore
├── package.json
├── package-lock.json
├── prisma.config.ts
├── tsconfig.json
└── README.md
```
🔐 Autenticação

A autenticação da aplicação é realizada utilizando JSON Web Token (JWT).

Após o login, um token é gerado e utilizado para acessar as rotas que necessitam de autenticação.

O projeto possui middlewares responsáveis por verificar a sessão do usuário antes de permitir o acesso às rotas protegidas.

👥 Autorização

Além da autenticação, a aplicação possui verificação de funções/permissões dos usuários.

Dessa forma, determinadas funcionalidades podem ser acessadas de acordo com a função do usuário autenticado.

Fluxo de acesso:

Requisição
    │
    ▼
Autenticação
    │
    ▼
Validação do JWT
    │
    ▼
Verificação da função
    │
    ▼
Controller
    │
    ▼
Resposta
🔒 Segurança das senhas

As senhas dos usuários não são armazenadas diretamente no banco de dados.

O projeto utiliza bcrypt para realizar o hash das senhas antes de armazená-las.

Isso adiciona uma camada de segurança ao processo de autenticação da aplicação.

✅ Validação de dados

A aplicação utiliza Zod para validar os dados recebidos nas requisições.

A validação garante que os dados enviados para a API estejam no formato esperado antes de serem processados.

Exemplo:

const schema = z.object({
  filename: z.string(),
  mimetype: z.string(),
  size: z.number(),
});
📎 Upload de arquivos

O projeto utiliza Multer para realizar o upload de arquivos.

Os arquivos enviados pela API são processados por uma configuração de armazenamento específica e podem ser associados às solicitações de reembolso.

🗄️ Banco de dados

O projeto utiliza Prisma ORM para realizar a comunicação com o banco de dados.

A aplicação utiliza SQLite através do adaptador @prisma/adapter-better-sqlite3.

Para gerar o Prisma Client, execute:

npm run generate

Esse comando executa:

prisma generate

📦 Instalação

Clone o repositório:

git clone https://github.com/RuanVClima/refund.git

Acesse a pasta do projeto:

cd refund

Instale as dependências:

npm install
⚙️ Variáveis de ambiente

Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente necessárias para a aplicação.

Exemplo:

DATABASE_URL="sua_url_do_banco"
JWT_SECRET="sua_chave_secreta"

Utilize os valores correspondentes à configuração do seu ambiente.

▶️ Executando o projeto

Para executar a aplicação em ambiente de desenvolvimento:

npm run dev

O projeto utiliza tsx watch para executar o servidor e reiniciá-lo automaticamente durante o desenvolvimento.

🧪 Testando a API

As rotas da aplicação podem ser testadas utilizando ferramentas como:

Insomnia
Postman
Thunder Client

O projeto também possui uma coleção do Insomnia para facilitar os testes das rotas da API.

🧩 Organização da aplicação

O projeto foi organizado separando as responsabilidades em diferentes módulos.

controllers

Responsáveis por receber as requisições, executar as operações necessárias e retornar as respostas da API.

routes

Responsáveis por definir as rotas da aplicação e direcionar cada requisição para o controller correspondente.

middlewares

Responsáveis por funcionalidades intermediárias, como:

Autenticação;
Autorização;
Validação;
Tratamento de requisições.
providers

Responsáveis por funcionalidades relacionadas a serviços externos ou recursos de infraestrutura, como o armazenamento de arquivos.

database

Responsável pela configuração e acesso ao banco de dados.

configs

Contém configurações utilizadas pela aplicação.

utils

Contém funções utilitárias e recursos reutilizáveis.

types

Contém as definições de tipos utilizadas pela aplicação.

📚 Conceitos praticados

Durante o desenvolvimento deste projeto foram praticados conceitos importantes de desenvolvimento backend:

Desenvolvimento de APIs REST;
Node.js;
TypeScript;
Express;
Autenticação;
Autorização;
JWT;
Hash de senhas;
Middlewares;
Validação de dados;
Upload de arquivos;
Armazenamento de arquivos;
ORM;
Banco de dados;
Tratamento de erros;
Organização de projetos backend;
Separação de responsabilidades.
🎯 Objetivo do projeto

O principal objetivo deste projeto foi colocar em prática conhecimentos de desenvolvimento backend, construindo uma API REST completa com autenticação, autorização, validação de dados, integração com banco de dados e gerenciamento de arquivos.

👨‍💻 Autor

Ruan Victor Cabral de Lima
