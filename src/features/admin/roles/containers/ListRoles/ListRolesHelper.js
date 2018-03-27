import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

export const tableColumns = [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => <Link to={`/roles/${record.id}`}>{text}</Link>,
  },
  {
    title: 'Data de Criação',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: text => moment(text).format('DD/MM/YYYY [às] hh:mm'),
  },
];
