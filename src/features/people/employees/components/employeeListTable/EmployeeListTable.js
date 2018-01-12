import React from 'react';
import { Row, Table } from 'antd';
import data from '../../../../../mock/employees';

/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
const EmployeeListTable = () => {
  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
      render: text => {
        return <a href="#">{text}</a>;
      },
    },
    {
      title: 'Cargo',
      dataIndex: 'level',
      key: 'level',
    },
    {
      title: 'Alocação',
      dataIndex: 'alocation',
      key: 'alocation',
    },
    {
      title: 'Projeto',
      dataIndex: 'project',
      key: 'project',
    },
  ];

  return (
    <div>
      <Row>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 2 }}
        />
      </Row>
    </div>
  );
};

export default EmployeeListTable;
