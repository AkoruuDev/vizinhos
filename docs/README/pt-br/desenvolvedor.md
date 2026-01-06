# Vizinhos.com
#### 📌 Visão Técnica do Projeto

O Vizinhos.com é uma plataforma white-label para criação de sites profissionais voltada a pequenos empreendedores.

Do ponto de vista técnico, o projeto foi concebido desde o início para operar como uma aplicação multi-tenant, onde múltiplos sites de clientes são servidos a partir de um único frontend, utilizando rotas dinâmicas, templates reutilizáveis e dados desacoplados da camada de apresentação.

O projeto encontra-se atualmente em fase de desenvolvimento do MVP, com foco em estrutura, escalabilidade e decisões arquiteturais sólidas.
***

### 🧱 Arquitetura Geral (Frontend White-label)

Toda a aplicação roda sob um único domínio `(vizinhos.com)` e se estende dinamicamente para os sites dos clientes através de rotas como:

```vizinhos.com/:empresa-name```

Cada cliente possui:
* um template visual escolhido dentro da própria plataforma de forma nativa
* dados próprios (conteúdo, informações institucionais, etc.)

Essa abordagem permite:
* manutenção centralizada
* menor custo inicial
* escalabilidade futura
* consistência visual entre clientes

Essa abordagem segue um padrão de frontend multi-tenant com renderização baseada em templates e dados desacoplados.
***

### 🗂️ Sistema de Templates
Os templates são componentes nativos criados internamente e renderizados dinamicamente com base em dados estruturados em JSON.

Fluxo conceitual:

```Template JSON → Renderização TSX → Página do cliente```

Essa separação entre dados e layout permite:
* reutilização de templates
* personalização sem duplicação de código
* evolução do sistema white-label sem quebra de clientes existentes
***

### 🌐 Sistema de Rotas

A documentação detalhada das rotas está disponível em:

[👉 Mapa de Rotas do Projeto]()

#### Visão geral

**Rotas da plataforma**
```
/
/about-us
/contact
/plans
/login
```

A rota /login concentra:
* cadastro
* login
* recuperação de senha
> por meio de um fluxo único com alternância de estados.

**Rotas dos clientes**
```
/:empresa-name
/:empresa-name/about
/:empresa-name/contact
```

**Rotas administrativas**
Administração interna da plataforma

```vizinhos.com/admin```

Administração do cliente:

```/:empresa-name/admin```

**Rotas Planejadas (Pós-MVP)**

Além das rotas iniciais do MVP, o projeto já prevê a expansão das rotas dos clientes, mantendo o mesmo padrão de multi-tenancy.

Rotas planejadas:

```/:empresa-name/links```
* Página de links rápidos, pensada para uso em bios de redes sociais (modelo similar ao Linktree).

```/:empresa-name/lp/:lpId```
* Landing pages personalizadas criadas pelo próprio cliente, permitindo campanhas específicas e páginas de conversão.
***

### 🔐 Autenticação e Segurança (em desenvolvimento futuro)

O sistema de autenticação está sendo projetado com foco em segurança, recuperação de acesso e longevidade da conta do usuário.

Funcionalidades previstas:
* Login com email e senha
* OAuth com Google
* Verificação de email por etapas
* Confirmações adicionais para ações sensíveis (pagamentos, mudança de plano, dados críticos)
* Sistema futuro de recuperação de conta que não dependa exclusivamente de email ou telefone

> Essas decisões são motivadas por problemas reais de perda de acesso enfrentados por usuários em outras plataformas.
***

### 💳 Pagamentos e Assinaturas

O sistema de pagamentos será implementado desde o MVP, de forma simplificada, permitindo que os próprios clientes realizem o pagamento de suas assinaturas.

**Gateway escolhido:**
Mercado Pago

Objetivo inicial é:
* cobrança recorrente de planos
* controle básico de acesso conforme plano contratado
* Funcionalidades mais avançadas (e-commerce, checkout customizado, etc.) ficam planejadas para fases futuras do projeto.
***

### 🧠 Backend (planejamento)
**O backend ainda não foi implementado.**

Arquitetura planejada:
* PostgreSQL
* Prisma ORM

Os dados dos clientes (templates, conteúdo, configurações) serão armazenados de forma estruturada, permitindo renderização dinâmica no frontend a partir de JSON.
***

### 🎨 Estilização

A estilização da aplicação é feita utilizando TailwindCSS, visando:
* rapidez no desenvolvimento
* consistência visual entre templates
* fácil manutenção e escalabilidade do design system
***

### 🧩 Gerenciamento de Estado Global

O projeto utiliza estado local no início do MVP.

Com a introdução de autenticação e dados persistentes, está prevista a adoção de estado global, inicialmente através de:
* Context API do React

Essa abordagem permitirá centralizar estados como:
* usuário autenticado
* empresa ativa
* plano contratado
* permissões
* template selecionado
***

### 🗂️ Estrutura de Pastas
**Estrutura atual do projeto (em evolução):**
```
src/
 ├── assets/
 ├── components/
 ├── layouts/
 ├── services/
 ├── templates/
 ├── pages/
 │   ├── client/
 │   └── platform/
 ├── router/
 │   └── AppRouter.tsx
 ├── App.tsx
 ├── index.css
 └── main.tsx
```

Pastas como `components`, `layouts` e `services` foram criadas desde o início para garantir organização e escalabilidade, mesmo que inicialmente estejam vazias.
***

### 🚧 Estado Atual do MVP

Atualmente:
* Projeto criado com React + Vite
* Uso de arquivos TSX, com adoção progressiva de tipagem conforme a evolução do projeto
* Sistema de rotas em desenvolvimento
* Estrutura base de templates definida

**🔮 Próximos Passos Técnicos**
* Finalizar MVP frontend
* Planejamento de autenticação, backend e pagamentos concluído
* Implementar autenticação inicial
* Criar painel administrativo do cliente
* Integrar backend
* Implementar cobrança recorrente
* Refinar sistema de templates
***

### ▶️ Rodando o Projeto Localmente
```
npm install
npm run dev
```