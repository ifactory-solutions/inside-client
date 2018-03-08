import React from 'react';
import { Row, Table } from 'antd';
import PropTypes from 'prop-types';

const EmployeeListTable = props => {
  const columns = [
    {
      title: 'Nome',
      dataIndex: 'personalInfo.nickname',
      key: 'name',
      render: text => <a href="#">{text}</a>,
    },
    {
      title: 'Cargo',
      dataIndex: 'jobTitle',
      key: 'level',
    },
    {
      title: 'Alocação',
      dataIndex: 'city',
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
          dataSource={props.data}
          pagination={{ pageSize: 8 }}
        />
      </Row>
    </div>
  );
};

EmployeeListTable.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

export default EmployeeListTable;
