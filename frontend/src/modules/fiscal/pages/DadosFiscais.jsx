import React from 'react';

const sections = [
  {
    title: 'Identificação',
    fields: ['CNPJ', 'Inscrição Estadual', 'Inscrição Municipal', 'CNAE', 'Regime Tributário', 'Endereços'],
  },
  {
    title: 'Certificados Digitais',
    fields: ['Tipo (A1/A3)', 'Validade', 'Ambiente (Homologação/Produção)', 'Alertas'],
  },
  {
    title: 'NF-e / NFC-e',
    fields: ['Séries e numeração', 'CSC', 'CFOP/CST/CSOSN', 'Benefícios Fiscais', 'Partilha ICMS', 'Configuração de Frete/Transportadora', 'Plano de contingência'],
  },
  {
    title: 'NFS-e',
    fields: ['Município/Provedor', 'Credenciais', 'Código de Serviço', 'Séries RPS', 'ISS Retido/Alíquota'],
  },
  {
    title: 'CT-e / MDF-e',
    fields: ['Configurações gerais', 'Transportadoras', 'Regimes especiais'],
  },
  {
    title: 'SPED e Obrigações',
    fields: ['EFDs', 'ECD/ECF', 'REINF', 'eSocial', 'Calendário de Entregas', 'Responsáveis'],
  },
  {
    title: 'Regras Fiscais',
    fields: ['Por UF', 'Por Cliente', 'Por Produto', 'Zona Franca', 'Filial / Centro de Custo'],
  },
  {
    title: 'Comunicação',
    fields: ['Endpoints SEFAZ', 'Prefeituras', 'Timeout', 'Retries', 'Webhooks'],
  },
  {
    title: 'Testes e Diagnóstico',
    fields: ['Status dos serviços', 'Validação de schema', 'Assinatura digital', 'Emissão de teste', 'Logs recentes'],
  },
  {
    title: 'Auditoria e Segurança',
    fields: ['Trilha antes/depois', '2FA para alterações', 'Criptografia de segredos'],
  },
];

const actions = ['Validar', 'Testar SEFAZ', 'Testar Prefeitura', 'Emitir teste', 'Importar do contador', 'Exportar configuração', 'Ver logs'];

export default function DadosFiscais() {
  return (
    <div className="card">
      <h2>Dados Fiscais da Empresa</h2>
      <p>
        Centralize todas as informações fiscais da organização. Utilize este painel para garantir que certificados, numeração e
        regras por UF estejam consistentes.
      </p>
      {sections.map((section) => (
        <section key={section.title} style={{ marginBottom: '1.5rem' }}>
          <h3>{section.title}</h3>
          <ul>
            {section.fields.map((field) => (
              <li key={field}>{field}</li>
            ))}
          </ul>
        </section>
      ))}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        {actions.map((action) => (
          <button key={action} type="button">
            {action}
          </button>
        ))}
      </div>
      <div style={{ marginTop: '1rem' }}>
        <span className="badge">Status: Incompleto</span>
      </div>
    </div>
  );
}
