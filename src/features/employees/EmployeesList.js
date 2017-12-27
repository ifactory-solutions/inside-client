import React from 'react';
import { Table /* Icon, Divider */ } from 'antd';
import data from './employeesData';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => {
    return <a href="#">{text}</a>;
  },
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, /* {
  title: 'Action',
  key: 'action',
  render: (text, record) => {
    return (
      <span>
        <a href="#">Action 一 {record.name}</a>
        <Divider type="vertical" />
        <a href="#">Delete</a>
        <Divider type="vertical" />
        <a href="#" className="ant-dropdown-link">
          More actions <Icon type="down" />
        </a>
      </span>
    );
  },
} */];

/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
const EmployeesList = () => {
  return (
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} />
  );
};

export default EmployeesList;
