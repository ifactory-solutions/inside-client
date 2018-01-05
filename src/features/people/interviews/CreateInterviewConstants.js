export const HORIZONTAL_FORM_LAYOUT = 'horizontal';
export const DATE_FORMAT_PT_BR = 'DD/MM/YYYY';
export const FORM_ITEM_LAYOUT = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};

export const FORM_ITEM_SUBMMIT_LAYOUT = {
  ...FORM_ITEM_LAYOUT,
  label: ' ',
  colon: false,
};

export const INTERVIEW_TYPES = [
  {
    value: 'human_resources',
    label: 'Entrevista RH',
  },
  {
    value: 'technical_interview',
    label: 'Entrevista Técnica',
  },
];

export const INTERVIEW_STATUS = [
  {
    value: 'pending',
    label: 'Pendente',
  },
  {
    value: 'completed',
    label: 'Finalizada',
  },
];

export const LABELS = {
  APPLICANT_NAME: 'Nome do Candidato',
  INTERVIEW_TYPE: 'Tipo',
  STATUS: 'Status',
  DUE_DATE: 'Data da Entrevista',
  INTERVIEWER: 'Entrevistador',
  SCORES: 'Pontuação',
};

export const PLACEHOLDERS = {
  APPLICANT_NAME: 'Nome do Entrevistado',
  INTERVIEW_TYPE: 'Tipo de Entrevista',
  STATUS: 'Status',
  DUE_DATE: 'Selecione uma data',
  INTERVIEWER: 'Nome do Entrevistador',
  SCORES: 'Pontuação',
};
