import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Table, Row, Button, Divider } from 'antd';
import data from '../../mock/employees';

const columns = [{
  title: 'Nome',
  dataIndex: 'name',
  key: 'name',
  render: text => {
    return <a href="#">{text}</a>;
  },
}, {
  title: 'Cargo',
  dataIndex: 'level',
  key: 'level',
}, {
  title: 'Alocação',
  dataIndex: 'alocation',
  key: 'alocation',
}, {
  title: 'Projeto',
  dataIndex: 'project',
  key: 'project',
}];

/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
const ListEmployees = ({ history }) => {
  return (
    <div>
      <Row type="flex" justify="end">
        <Button
          type="primary"
          onClick={() => { history.push('/employees/new'); }}>
            Novo Colaborador
        </Button>
      </Row>
      <Divider />
      <Row>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 2 }} />
      </Row>
    </div>
  );
};

ListEmployees.propTypes = {
  history: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default withRouter(ListEmployees);
