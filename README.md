# Documentação do Projeto MKS Frontend Challenge

Este documento descreve a aplicação desenvolvida como parte do desafio frontend proposto pela MKS Desenvolvimento de Sistemas. A aplicação consiste em uma loja virtual que consome uma API REST de produtos para exibir uma lista de produtos e permite a interação com um carrinho de compras.

## Visão Geral

A aplicação foi desenvolvida utilizando as seguintes tecnologias:

- TypeScript
- React (com Next.js)
- React-query
- Scss
- Framer-motion
- Jest (para testes unitários)

A seguir, serão apresentadas as principais funcionalidades da aplicação, bem como informações sobre como executá-la localmente e sobre o deployment.

## Funcionalidades

### Loja

- A lista de produtos é buscada da API REST fornecida pela MKS Desenvolvimento de Sistemas.
- Durante o carregamento dos produtos, é exibido um efeito de shimmer/skeleton para melhorar a experiência do usuário.
- Os produtos são exibidos em uma interface amigável, seguindo o design fornecido no Figma.

### Carrinho

- O carrinho permite adicionar produtos selecionados, exibindo-os com suas respectivas quantidades.
- É possível aumentar a quantidade de cada produto selecionado diretamente no carrinho.

### Testes Unitários

- Foram implementados testes unitários utilizando Jest e a biblioteca testing-library para garantir a qualidade do código.

## Executando Localmente

Para executar a aplicação localmente, siga os passos abaixo:

1. Clone o repositório do projeto: git clone https://github.com/Gustavoxky/mks-test.git


2. Acesse o diretório do projeto: cd mks-test


3. Instale as dependências: npm install


4. Inicie a aplicação: npm run dev

5. Inicie os testes unitarios: npm test





