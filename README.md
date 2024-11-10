# TaskNotes API

API para gerenciar notas e tarefas do dia a dia em formato de pequenos cards, com diferentes níveis de prioridade.

## Visão Geral
TaskNotes é um projeto que simula um caderno de notas digital, onde os usuários podem criar, atualizar, ler e deletar notas. Cada nota possui um título, um campo para anotações e um nível de prioridade (Prioridade ou Normal), permitindo que o usuário organize melhor suas tarefas.

Este repositório contém todo o backend da aplicação, incluindo a estrutura da API, conexão com o banco de dados e endpoints para o gerenciamento de notas.

## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução para o JavaScript no servidor.
- **Express**: Framework para criar e gerenciar rotas e controladores da API.
- **MongoDB**: Banco de dados não relacional, usado para armazenar as notas em collections de forma dinâmica.
- **Google Cloud**: Serviço de cloud provider utilizado para hospedar o banco de dados MongoDB, com um cluster localizado em São Paulo para garantir melhor desempenho.

## Funcionalidades da API
A API oferece operações CRUD para gerenciar notas, incluindo:
- **Criar uma nova nota** com título, conteúdo e nível de prioridade.
- **Listar todas as notas** salvas no banco de dados.
- **Atualizar uma nota existente** (alterando título, conteúdo ou prioridade).
- **Excluir uma nota** específica.

## Estrutura de Dados
Cada nota será armazenada com o seguinte formato:
- `title` (string): título da nota.
- `notes` (string): conteúdo da anotação.
- `priority` (boolean): nível de prioridade da nota, podendo ser "True" ou "false"(Sem prioridade).

## Integração com o Google Cloud e Configurações de Segurança
Este projeto utiliza o Google Cloud para hospedar o banco de dados MongoDB, aproveitando a infraestrutura de um cluster localizado em São Paulo para melhor performance e proximidade com nossa localidade. 

Para garantir a segurança, o projeto utiliza variáveis de ambiente, que são configuradas no arquivo `.env`, para armazenar as informações sensíveis como a URI do banco de dados. Isso evita que chaves de acesso ou outras informações confidenciais sejam expostas publicamente no repositório.

## Pré-requisitos
- **Node.js** instalado
- **Conta no Google Cloud** com um cluster MongoDB configurado
- **MongoDB** configurado e rodando no Google Cloud

## Instalação
1. Clone este repositório:

   ```bash
   git clone https://github.com/grebechi/TaskNotes_API.git
   cd TaskNotes_API

2. Instale as dependências:

    ```bash
    npm install

3. Configure as variáveis de ambiente:

- Crie um arquivo **.env** na raiz do projeto com os dados de conexão para o MongoDB e a porta do Servidor:
    ```bash
    MONGODB_URI=sua_conexao_mongodb
    SERVER_PORT=3000

1. Inicie o servidor:

    ```bash
    npm start
