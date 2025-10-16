import financeRoutes from '../modules/financeiro/routes/index.routes.js';
import fiscalRoutes from '../modules/fiscal/routes/index.routes.js';
import vendasRoutes from '../modules/vendas/routes/index.routes.js';
import crmRoutes from '../modules/crm/routes/index.routes.js';
import marketingRoutes from '../modules/marketing/routes/index.routes.js';
import estoqueRoutes from '../modules/estoque/routes/index.routes.js';
import logisticaRoutes from '../modules/logistica/routes/index.routes.js';
import producaoRoutes from '../modules/producao/routes/index.routes.js';
import projetosRoutes from '../modules/projetos/routes/index.routes.js';
import rhRoutes from '../modules/rh/routes/index.routes.js';
import governancaRoutes from '../modules/governanca/routes/index.routes.js';
import infraestruturaRoutes from '../modules/infraestrutura/routes/index.routes.js';
import iaRoutes from '../modules/ia/routes/index.routes.js';
import ecommerceRoutes from '../modules/ecommerce/routes/index.routes.js';
import comunicacaoRoutes from '../modules/comunicacao/routes/index.routes.js';
import agendaRoutes from '../modules/agenda/routes/index.routes.js';
import kanbanRoutes from '../modules/kanban/routes/index.routes.js';
import whatsappRoutes from '../modules/whatsapp/routes/index.routes.js';

export default [
  ...financeRoutes,
  ...fiscalRoutes,
  ...vendasRoutes,
  ...crmRoutes,
  ...marketingRoutes,
  ...estoqueRoutes,
  ...logisticaRoutes,
  ...producaoRoutes,
  ...projetosRoutes,
  ...rhRoutes,
  ...governancaRoutes,
  ...infraestruturaRoutes,
  ...iaRoutes,
  ...ecommerceRoutes,
  ...comunicacaoRoutes,
  ...agendaRoutes,
  ...kanbanRoutes,
  ...whatsappRoutes,
];
