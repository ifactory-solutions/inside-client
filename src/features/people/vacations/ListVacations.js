import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button, Divider, Row, Table } from 'antd';
import data from '../../../mock/vacations';

const columns = [{
  title: 'Autor',
  dataIndex: 'author',
  key: 'author',
  render: text => {
    return <a href="#">{text}</a>;
  },
}, {
  title: 'Status',
  dataIndex: 'status',
  key: 'status',
}, {
  title: 'Início',
  dataIndex: 'startDate',
  key: 'startDate',
}, {
  title: 'Fim',
  dataIndex: 'endDate',
  key: 'endDate',
},
];
/* eslint arrow-body-style: ["error", "always"] */
const ListVacations = ({ history }) => {
  return (
    <div>
      <Row type="flex" justify="end">
        <Button
          type="primary"
          onClick={() => { history.push('/vacation/new'); }}>
            Novas Férias
        </Button>
      </Row>
      <Divider />
      <Row>
        <Table
          columns={columns}
          dataSource={data}
          rowKey="id"
          pagination={{ pageSize: 2 }} />
      </Row>
    </div>
  );
};

ListVacations.propTypes = {
  history: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default withRouter(ListVacations);
