# Next.js Boilerplate - VORTEX (Universidade de Fortaleza - UNIFOR)

Este é um boilerplate oficial para projetos desenvolvidos com [Next.js](https://nextjs.org/) no VORTEX. Ele fornece uma base sólida para iniciar novos projetos, padronizando configurações, estruturas e ferramentas com foco em performance, escalabilidade e boas práticas.

## Features

- Next.js
- Suporte a Tailwind CSS
- Prettier configurado
- Aliases para caminhos com '@'
- Estrutura de pastas organizada

## Estrutura de Diretórios ¹

```bash
src/
  ├─ features/                # Funcionalidades específicas do domínio
  │   └─ user/                # Exemplo: módulo de usuário
  │       ├─ actions/         # Server Actions específicas do módulo
  │       ├─ components/      # Componentes específicos
  │       ├─ contexts/        # Contextos React para estado global do módulo
  │       │   ├─ api/         # Contextos relacionados a dados da API
  │       │   └─ ui/          # Contextos relacionados à interface
  │       ├─ hooks/           # Hooks reutilizáveis do módulo
  │       │   ├─ api/         # Hooks de integração com API
  │       │   └─ ui/          # Hooks de lógica de UI
  │       ├─ styles/          # Estilos locais
  │       ├─ utils/           # Funções utilitárias
  │       │   ├─ handlers/    # Manipuladores de eventos/erros
  │       │   ├─ helpers/     # Funções auxiliares
  │       │   └─ validations/ # Schemas e validações
  │       └─ views/           # Camada de orquestrção dos componentes
  │
  ├─ services/                # Serviços de integração e infraestrutura
  │   ├─ adapters/            # Adaptadores para APIs/libs externas
  │   ├─ api/                 # Configurações e chamadas de API
  │   ├─ auth/                # Lógica de autenticação
  │   └─ mocks/               # Mocks para testes
  │
  ├─ shared/                  # Recursos compartilhados entre módulos
  │   ├─ actions/             # Server Actions reutilizáveis
  │   ├─ components/          # Componentes UI compartilhados
  │   ├─ contexts/            # Contextos globais
  │   │   ├─ api/             # Contextos globais de API
  │   │   └─ ui/              # Contextos globais de UI
  │   ├─ hooks/               # Hooks reutilizáveis
  │   │   ├─ api/             # Hooks globais para API
  │   │   └─ ui/              # Hooks globais para UI
  │   ├─ styles/              # Estilos globais
  │   ├─ utils/               # Funções utilitárias compartilhadas
  │   │   ├─ handlers/        # Manipuladores globais
  │   │   ├─ helpers/         # Funções auxiliares globais
  │   │   └─ validations/     # Schemas/validações globais
  │   └─ views/               # Orquestração de componentes compartilhados
```

###### ¹. Algumas pastas podem conter apenas um arquivo `.gitkeep`. Esse arquivo serve para que o Git rastreie e mantenha o diretório no repositório mesmo quando ele estiver vazio. Quando adicionar arquivos reais, o `.gitkeep` pode ser removido sem problemas.

## Como usar

1. Clone o repositório

```bash
git clone https://github.com/roollf/nextjs.git
```

2. Instale as dependências

```bash
cd nextjs
npm install
```

3. Rode o projeto

```bash
npm run dev
```
