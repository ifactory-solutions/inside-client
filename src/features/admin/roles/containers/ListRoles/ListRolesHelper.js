import React from 'react';
import moment from 'moment';

export const tableColumns = [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="#">{text}</a>,
  },
  {
    title: 'Data de Criação',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: text => moment(text).format('DD/MM/YYYY [às] hh:mm'),
  },
];
