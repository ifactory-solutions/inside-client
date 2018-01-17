import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Table, Row, Button, Divider } from 'antd';
import data from '../../../mock/roles';

const columns = [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="#">{text}</a>,
  },
  {
    title: 'Descrição',
    dataIndex: 'description',
    key: 'description',
  },
];

const ListProfiles = ({ history }) => (
  <div>
    <Row type="flex" justify="end">
      <Button
        type="primary"
        onClick={() => {
          history.push('/roles/new');
        }}
      >
          Novo Perfil
      </Button>
    </Row>
    <Divider />
    <Row>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 2 }}
      />
    </Row>
  </div>
);

ListProfiles.propTypes = {
  history: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default withRouter(ListProfiles);
