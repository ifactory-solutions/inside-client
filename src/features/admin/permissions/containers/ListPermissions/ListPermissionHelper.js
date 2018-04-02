import * as React from 'react';
import * as _ from 'lodash';
import { Tag } from 'antd';
import { Link } from 'react-router-dom';

const renderRolesTags = (text, user) => {
  const { roles } = user;
  const tags = _.map(roles, role => <Tag key={role.id}>{role.name}</Tag>);
  return <div>{tags}</div>;
};

export const columns = [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => (
      <Link to={`/permissions/${record.id}`}>{text}</Link>
    ),
  },
  {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Perfis',
    dataIndex: 'roles',
    key: 'roles',
    render: renderRolesTags,
  },
  {
    title: 'Ações',
    key: 'actions',
    render: (text, record) => (
      <Link to={`/permissions/${record.id}/edit`}>Editar</Link>
    ),
  },
];
