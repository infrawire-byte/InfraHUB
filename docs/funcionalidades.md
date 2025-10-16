# Funcionalidades Planejadas

## Core
- Autenticação JWT com RBAC granular por módulo e escopo.
- Auditoria completa de ações sensíveis (edit, approve, delete) com before/after.
- Integração nativa com Google Maps (Directions, Distance Matrix, Autocomplete) com fallback para OSRM quando `USE_GOOGLE_MAPS=false`.
- Tema claro/escuro persistido, atalhos globais e paleta de comandos.

## Módulos Obrigatórios
- **Dados Fiscais da Empresa**: cadastro único de configurações fiscais, certificados, regras por UF e diagnósticos SEFAZ/prefeituras.
- **Agenda**: visões dia/semana/mês, recorrência, notificações, ICS import/export, integrações Google/Outlook.
- **Kanban**: boards, listas, cartões com checklists, automações, WIP limits e sincronização com Agenda para prazos.
- **WhatsApp/Chatbots**: inbox omnichannel, métricas, fluxos híbridos bot+humano e integração com CRM/n8n/Zapier.

## Governança e Segurança
- Rate limiting em rotas sensíveis.
- Logs estruturados com request id.
- Configurações via `.env`, sem segredos commitados.
