export const nameInputProps = {
  type: 'text',
  placeholder: 'Insira o nome do perfil',
};

export const columns = [
  {
    title: 'Nome',
    key: 'name',
    dataIndex: 'name',
  },
  {
    title: 'Contexto',
    key: 'context',
    dataIndex: 'context',
    sorter: (a, b) => a > b,
  },
  {
    title: 'Descrição',
    key: 'description',
    dataIndex: 'description',
  },
];

export const FORM_ITEM_LAYOUT = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 },
};

export const FORM_ITEM_SUBMIT_LAYOUT = {
  ...FORM_ITEM_LAYOUT,
  label: ' ',
  colon: false,
  style: { textAlign: 'right' },
};
