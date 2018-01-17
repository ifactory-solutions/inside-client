import React from 'react';
import { withRouter } from 'react-router-dom';
import { Table, Button, Row, Divider, Input, message } from 'antd';

import UserList from '../../../mock/user_list';

const ButtonGroup = Button.Group;

const columns = [
  {
    title: 'Nome',
    dataIndex: 'nickname',
    key: 'nickname',
  },
  {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Perfil',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Ações',
    key: 'actions',
    render: (text, record) => (
      <ButtonGroup>
        <Button
          icon="edit"
          onClick={() => message.info(`Editando ${record.name}...`)}
        />
        <Button
          icon="eye-o"
          onClick={() => message.info(`Visualizando ${record.name}...`)}
        />
        <Button
          icon="delete"
          onClick={() => message.warning(`Removendo ${record.name}...`)}
        />
      </ButtonGroup>
    ),
  },
];

class ListPermissions extends React.Component {
  render() {
    return (
      <div>
        <Row type="flex" justify="end">
          <Input.Search
            placeholder="Pesquisar"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
          />
        </Row>

        <Divider />

        <Row>
          <Table
            size="middle"
            columns={columns}
            dataSource={UserList}
            pagination={{ pageSize: 8 }}
          />
        </Row>
      </div>
    );
  }
}

export default withRouter(ListPermissions);
