# Arquitetura InfraHub ERP

InfraHub é composto por um backend Node.js/Express conectado a um banco MySQL e um frontend React (Vite). O backend expõe APIs REST versionadas em `/api/v1` e um servidor WebSocket nativo para eventos em tempo real. A autenticação utiliza JWT com RBAC granular baseado em papéis e escopos por unidade/centro de custo.

## Componentes

- **Backend**: Express, mysql2, JWT, middlewares de auditoria e rate limiting.
- **WebSocket**: servidor nativo `ws` autenticado por token, canais por módulo.
- **Frontend**: React com roteamento modular, Redux Toolkit para estado global, suporte a tema claro/escuro e atalhos.
- **Banco de dados**: MySQL com schema inicial para usuários, papéis, permissões, módulos e auditoria.

## Fluxo de Requisições

1. Cliente realiza login (implementação futura) e recebe JWT.
2. Requisições HTTP incluem token Bearer; middleware valida e aplica RBAC.
3. Ações sensíveis disparam auditoria com antes/depois e request id.
4. WebSocket usa o mesmo token na query string para abrir canais em tempo real.

## Padrões

- Versionamento de rotas: `/api/v1/...`.
- Logs estruturados com correlação `requestId`.
- Validações fiscais (CNPJ/IE/CNAE) centralizadas em `src/utils/validators.js`.
- Estrutura modular no frontend com rotas, páginas, stores e serviços separados por domínio.
