# 🚀 TC Criptomoedas

Sistema web desenvolvido para simular uma plataforma de gerenciamento de carteiras de criptomoedas, permitindo que usuários acompanhem o mercado, criem carteiras, realizem operações de compra e venda de ativos e controlem seus investimentos em tempo real.

---

# 👥 Desenvolvedores

* **Christian Ferreira Toledo**
* **Thiago Santos Fonseca Amaral**

> Trabalho desenvolvido para a disciplina de **Programação Web**.

---

# 📖 Sobre o Projeto

O **TC Criptomoedas** é uma aplicação web full stack desenvolvida com foco no aprendizado de tecnologias modernas para desenvolvimento de aplicações web.

O sistema simula uma plataforma de investimentos em criptomoedas, onde cada usuário possui sua própria conta e pode criar carteiras, adicionar saldo, comprar e vender ativos digitais e acompanhar a valorização dos seus investimentos.

Os preços das criptomoedas são obtidos através da **API pública CoinGecko**, permitindo que o sistema apresente informações atualizadas do mercado.

Além disso, toda a aplicação foi construída seguindo uma arquitetura cliente-servidor, separando completamente o frontend do backend através de uma API REST.

---

# ✨ Principais Funcionalidades

* 👤 Cadastro e autenticação de usuários
* 🔒 Rotas protegidas por autenticação
* 🍪 Autenticação utilizando JWT armazenado em Cookies HTTP
* 🔐 Senhas criptografadas antes do armazenamento no banco de dados
* 💼 Criação e gerenciamento de múltiplas carteiras
* 💰 Adição de saldo à conta
* 📈 Compra de criptomoedas
* 📉 Venda de criptomoedas
* 📊 Acompanhamento da valorização dos ativos
* 💲 Cálculo automático do patrimônio da carteira
* 🌐 Consumo de API externa para atualização dos preços das moedas
* 🔄 Atualização dinâmica das informações da interface

---

# 🛠️ Tecnologias Utilizadas

## Frontend

* Next.js
* React
* TypeScript
* CSS
* Sonner (Notificações)

## Backend

* Node.js
* Express
* TypeScript
* Prisma ORM

## Banco de Dados

* SQLite

## Segurança

* JWT (JSON Web Token)
* Bcrypt (Criptografia de Senhas)
* Cookies HTTP

## API Externa

* CoinGecko API

---

# 🏗️ Arquitetura

O projeto segue uma arquitetura **Full Stack** baseada em API REST.

```text
Frontend (Next.js)
        │
        │ HTTP
        ▼
Backend (Node.js + Express)
        │
        │ Prisma ORM
        ▼
Banco de Dados (SQLite)

        ▲
        │
CoinGecko API
```

---

# 📡 API Externa

Os dados do mercado são obtidos através da **CoinGecko API**, permitindo que o sistema apresente informações atualizadas sobre diversas criptomoedas.

Entre as informações obtidas estão:

* Nome
* Símbolo
* Logotipo
* Preço atual
* Variação de mercado
* Captalização de mercado

---

# 🎯 Objetivos do Projeto

Este projeto teve como principal objetivo aplicar, na prática, conceitos fundamentais do desenvolvimento web moderno, incluindo:

* Desenvolvimento Frontend e Backend
* Consumo de APIs REST
* Autenticação de usuários
* Segurança da informação
* Integração com banco de dados
* Arquitetura cliente-servidor
* Organização de código em camadas
* Desenvolvimento utilizando TypeScript
* Manipulação dinâmica de dados
* Versionamento 

---

# 📄 Licença

Este projeto foi desenvolvido exclusivamente para fins acadêmicos, como parte da disciplina de **Programação Web**, e não constitui recomendação de investimentos.
