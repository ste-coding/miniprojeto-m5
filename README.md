# eWaste: miniprojeto do módulo 5

eWaste é uma plataforma desenvolvida para facilitar a localização de pontos de descarte de lixo eletrônico, promovendo a conscientização ambiental e a sustentabilidade. Este projeto tem como objetivo ajudar os usuários a encontrar a melhor forma de descartar seus dispositivos eletrônicos de maneira responsável.

![Screenshot do Projeto](.//client/public/screenshot.png)


## Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-geral-do-projeto)
- [Instruções de Instalação](#instruções-de-instalação)
- [Como Iniciar o Projeto](#como-iniciar-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Links Importantes](#links-importantes)
- [Contribuição](#contribuição)
- [Licença](#licença)


## Tecnologias Utilizadas

- **React**: ^18.3.1
- **Vite**: ^5.4.1
- **Node.js**: ^20.11.0
- **Express**: ^4.19.2
- **Axios**: ^1.7.7
- **ScrollReveal**: ^4.0.9

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
   git clone https://github.com/ste-coding/miniprojeto-m5.git
   ```

2. Navegue até a pasta do cliente e instale as dependências:

   ```bash
   cd client
   npm install
   ```

3. Navegue até a pasta da API e instale as dependências:

   ```bash
   cd api
   npm install
   ```

## Como Iniciar o Projeto

### Para iniciar a aplicação front-end (Vite)

Navegue até a pasta `client` e execute:

```bash
npm run dev
```
Abra o link gerado em seu navegador.

### Para iniciar a API

Navegue até a pasta `api` e execute:

```bash
npm start
```

## Funcionalidades

### About

O componente `About` utiliza a biblioteca `ScrollReveal` para criar animações ao rolar a página. Ele apresenta a missão da plataforma e inclui uma imagem que destaca a importância do descarte responsável.

### RecyclingPoints

O componente `RecyclingPoints` permite aos usuários visualizar os pontos de coleta de lixo eletrônico, filtrando por cidade ou tipo de ponto. Informações detalhadas são apresentadas em um pop-up ao clicar em um ponto, facilitando a escolha do local adequado para descarte.


## Links Importantes
A API utilizada neste projeto pode ser acessada [neste repositório](https://github.com/seu-usuario/repo-api).


Veja a postagem de apresentação no LinkedIn [neste link](https://www.linkedin.com/posts/stephanie-candido_github-ste-codingminiprojeto-m5-activity-7244000767857070080-G9x-?utm_source=share&utm_medium=member_desktop). 

## Tópicos

- #Sustentabilidade
- #API
- #React

## Contribuição

Sinta-se à vontade para contribuir! Abra um _pull request_ ou envie um _issue_ para sugestões ou correções.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

