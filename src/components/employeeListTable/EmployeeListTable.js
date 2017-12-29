import React from 'react';
import { Row, Button, Divider, Table } from 'antd';
import data from '../../mock/employees';

/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
const EmployeeListTable = () => {
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

export default EmployeeListTable;
