# eWaste: miniprojeto do módulo 5

eWaste é uma plataforma que facilita a localização do ponto de descarte mais próximo para lixo eletrônico. Desenvolvida com React, esta landing page foi projetada para promover a sustentabilidade e incentivar a prática do descarte responsável.

## Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instruções de Instalação](#instruções-de-instalação)
- [Como Iniciar o Projeto](#como-iniciar-o-projeto)
- [Arquivos e Estruturas](#arquivos-e-estruturas)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Tecnologias Utilizadas

- React
- Vite
- Node.js
- Express

## Estrutura Geral do Projeto


```
/projeto
│
├── /client          # Aplicação front-end
│   ├── public       # Arquivos públicos (incluindo favicon)
│   ├── src          # Código fonte da aplicação
│   │   ├── assets    # Imagens
│   │   ├── components # Componentes React
│   │   │   ├── About/
│   │   │   ├── Contact/
│   │   │   ├── Header/
│   │   │   ├── Home/
│   │   │   └── RecyclingPoints/
│   │   └── services  # Serviços, como configuração da API
│   └── package.json  # Dependências
│
├── /api             # Aplicação back-end
│   └── ...          # Código da API
│
└── README.md        # Documentação do projeto
```

## Instruções de Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Navegue até a pasta do cliente e instale as dependências:

   ```bash
   cd projeto/client
   npm install
   ```

3. Navegue até a pasta da API e instale as dependências:

   ```bash
   cd ../api
   npm install
   ```

## Como Iniciar o Projeto

### Para iniciar a aplicação front-end (Vite)

Navegue até a pasta `client` e execute:

```bash
npm run dev
```
Acesse o local host

### Para iniciar a API

Navegue até a pasta `api` e execute:

```bash
npm start
```

## Funcionalidades

### About Component

O componente `About` utiliza `ScrollReveal` para criar animações de revelação ao rolar a página. Ele apresenta informações sobre a plataforma e inclui uma imagem.

### RecyclingPoints Component

O componente `RecyclingPoints` permite que os usuários visualizem pontos de coleta de lixo eletrônico. Ele oferece opções para filtrar por cidade ou tipo e exibe informações detalhadas em um pop-up ao clicar em um ponto.


## Contribuição

Sinta-se à vontade para contribuir! Abra um _pull request_ ou envie um _issue_ para sugestões ou correções.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
