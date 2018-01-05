export const LABELS = {
  RG: {
    NUMERO: 'RG',
    DATA_EMISSAO: 'Data de Emissão',
    EMISSOR: 'Orgão Expedidor',
  },

  CPF: 'CPF',

  NUMERO_CTPS: 'Número da CTPS',
  NUMERO_PIS: 'Número do PIS',

  TITULO_ELEITOR: {
    NUMERO: 'Título de Eleitor',
    ZONA: 'Zona',
    SECAO: 'Seção',
    DATA_EMISSAO: 'Data de Emissão',
  },

  DADOS_BANCARIOS: {
    NOME_BANCO: 'Banco',
    TIPO_CONTA: 'Tipo de Conta',
    AGENCIA: 'Agência',
    CONTA: 'Conta',
  },
};

export const PLACEHOLDERS = {
  RG: {
    NUMERO: 'Digite o número do RG',
    DATA_EMISSAO: 'Selecione a data de emissão',
    EMISSOR: 'Digite o orgão expedidor',
  },

  CPF: 'Número do CPF',

  NUMERO_CTPS: 'Digite o número da CTPS',
  NUMERO_PIS: '',

  TITULO_ELEITOR: {
    NUMERO: 'Digite o número do Título de Eleitor',
    ZONA: 'Digite o número da zona eleitoral',
    SECAO: 'Digite o número da seção eleitoral',
    DATA_EMISSAO: 'Selecione a data de emissão',
  },

  DADOS_BANCARIOS: {
    NOME_BANCO: 'Digite o Nome do Banco',
    TIPO_CONTA: 'Selecione o Tipo de Conta',
    AGENCIA: 'Digite o número da Agência',
    CONTA: 'Digite o número da Conta',
  },
};

export const TIPOS_CONTA_BANCARIA = [
  {
    value: 'conta_corrente',
    label: 'Conta Corrente',
  },
  {
    value: 'conta_poupança',
    label: 'Poupança',
  },
];
