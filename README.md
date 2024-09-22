# Projeto NestJS: Autenticação Google e Consumo da API de Star Wars
Este projeto é uma API desenvolvida em NestJS que utiliza autenticação com o Google e consome dados da API de Star Wars. Toda a aplicação está preparada para rodar em containers Docker, facilitando a configuração e execução do ambiente.

## Configuração do .env
Antes de rodar o projeto, crie um arquivo .env na raiz do projeto com as seguintes variáveis:

MONGO_STRING=mongodb://root:example@mongo:27017/
MONGO_INITDB_ROOT_USERNAME=root
MONGO_INITDB_ROOT_PASSWORD=example
GOOGLE_CLIENT_ID=1033684801871-gdf42er9fh8vhd0nqvfdc8li0v16nulp.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback
JWT_SECRET=alterar_este_valor_para_um_token_seguro
STARWARS_URL=https://swapi.dev/api/
## Descrição das Variáveis:
#### MONGO_STRING: String de conexão com o banco de dados MongoDB.
#### MONGO_INITDB_ROOT_USERNAME: Nome de usuário para o banco de dados MongoDB.
#### MONGO_INITDB_ROOT_PASSWORD: Senha para o banco de dados MongoDB.
#### GOOGLE_CLIENT_ID: ID do cliente para autenticação com o Google.
#### GOOGLE_CLIENT_SECRET: Segredo do cliente para autenticação com o Google.
#### GOOGLE_CALLBACK_URL: URL de retorno após autenticação com o Google.
#### JWT_SECRET: Token secreto usado para assinar e validar os JWTs. Mudar este valor para um token seguro.
#### STARWARS_URL: URL da API de Star Wars.
## Sobre o Projeto
Este projeto utiliza NestJS para criar uma API que autentica usuários via Google OAuth 2.0 e consome dados da API pública de Star Wars (https://swapi.dev). Após a autenticação, os usuários poderão acessar informações sobre personagens, filmes e outros recursos do universo Star Wars.

## Funcionalidades Principais:
Autenticação Google: Implementação da autenticação usando Google OAuth 2.0.
JWT para Gerenciamento de Sessão: Sessões gerenciadas com JSON Web Tokens (JWT).
Consumo da API de Star Wars: Integração com a API pública de Star Wars para obter e exibir dados.
## Como Executar o Projeto
Clone este repositório.

Crie o arquivo .env com as variáveis de ambiente mencionadas.

Execute o projeto utilizando Docker Compose com o comando:

docker-compose up
## Pré-requisitos
Docker: Certifique-se de que o Docker e o Docker Compose estejam instalados na sua máquina.