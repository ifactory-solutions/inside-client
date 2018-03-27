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
