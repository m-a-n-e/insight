# Insight - Sistema de Gestão de Ideias

## Descrição do Projeto
O Insight é um sistema web para cadastro, visualização, edição e exclusão de ideias, desenvolvido em React com Vite e Tailwind CSS. O objetivo é facilitar o registro e a organização de ideias, permitindo também a importação e exportação de dados via clipboard.

### Integrantes do Grupo
- Emanuel Doerner
- Gabriel Ribeiro

## Descrição do Problema
Muitas vezes, ideias importantes se perdem por falta de um local centralizado e prático para registro. O Insight resolve esse problema ao oferecer uma interface simples e eficiente para gerenciar ideias, com suporte a tags, descrição detalhada e operações CRUD completas.

## Tecnologias Utilizadas
- React
- Vite
- Tailwind CSS
- json-server

## Limitações do Projeto
- Não possui autenticação de usuários.
- Não há controle de permissões ou histórico de alterações.
- O backend é simulado com json-server, não sendo adequado para produção.

## Descrição das Entidades
### Ideia
- `id` (string): Identificador único da ideia.
- `title` (string): Título da ideia.
- `tags` (string): Lista de tags separadas por vírgula.
- `description` (string): Descrição detalhada da ideia.

## Como Executar o Projeto Localmente
1. **Clone o repositório:**
   ```sh
   git clone https://github.com/m-a-n-e/insight.git
   cd insight
   ```
2. **Instale as dependências:**
   ```sh
   npm install
   ```
3. **Execute o projeto (frontend + backend juntos):**
   ```sh
   npm run dev:all
   ```
   Isso irá iniciar tanto o frontend quanto o json-server automaticamente.

   > Caso prefira, é possível rodar os serviços separadamente:
   >
   > - Para iniciar apenas o backend (json-server):
   >   ```sh
   >   npx json-server --watch db.json --port 3001
   >   ```
   > - Para iniciar apenas o frontend:
   >   ```sh
   >   npm run dev
   >   ```

4. Acesse o sistema em [http://localhost:5173](http://localhost:5173)

## Outros Conteúdos Relevantes
- Importação e exportação de ideias via área de transferência (clipboard), facilitando backup e migração de dados.
- Interface responsiva e acessível, com foco em usabilidade.
- Validação de campos obrigatórios no formulário de ideias.
- Navegação intuitiva e feedback visual para ações do usuário.