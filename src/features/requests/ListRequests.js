import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Table, Row } from 'antd';
import data from '../../mock/requests';

const columns = [{
  title: 'Autor',
  dataIndex: 'author',
  key: 'author',
  render: text => {
    return <a href="#">{text}</a>;
  },
}, {
  title: 'Requisição',
  dataIndex: 'request',
  key: 'request',
}, {
  title: 'Data',
  dataIndex: 'date',
  key: 'date',
}];

/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
const ListRequests = (/* { history } */) => {
  return (
    <div>
      {/* <Row type="flex" justify="end">
        <Button
          type="primary"
          onClick={() => { history.push('/employees/new'); }}>
            Novo Req
        </Button>
      </Row>
      <Divider /> */}
      <Row>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 2 }} />
      </Row>
    </div>
  );
};

ListRequests.propTypes = {
  history: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default withRouter(ListRequests);
