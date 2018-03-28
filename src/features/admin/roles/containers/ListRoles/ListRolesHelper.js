import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { store } from 'utils/store';
import { showDeleteConfirm } from 'components/ui/Alerts';
import browserHistory from 'utils/browserHistory';

import { deleteRoles } from '../../actions';

const ButtonGroup = Button.Group;

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
  {
    title: 'Ações',
    key: 'actions',
    render: (text, record) => (
      <ButtonGroup>
        <Button
          icon="edit"
          onClick={() => {
            browserHistory.push(`/roles/${record.id}/edit`);
          }}
        />
        <Button
          icon="delete"
          onClick={() =>
            showDeleteConfirm({
              title: 'Remover Perfil',
              content: 'Você realmente deseja remover esse perfil?',
              onOk: () => {
                store.dispatch(deleteRoles(record.id));
              },
            })
          }
        />
      </ButtonGroup>
    ),
  },
];
