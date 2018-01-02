import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Table, Row, Divider, Button } from 'antd';
import data from '../../mock/careers';

const columns = [{
  title: 'Nome',
  dataIndex: 'name',
  key: 'name',
  render: text => {
    return <a href="#">{text}</a>;
  },
}, {
  title: 'Descrição',
  dataIndex: 'description',
  key: 'description',
}];

/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
const ListCareers = ({ history }) => {
  return (
    <div>
      <Row type="flex" justify="end">
        <Button
          type="primary"
          onClick={() => { history.push('/careers/new'); }}>
            Nova Carreira
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

ListCareers.propTypes = {
  history: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default withRouter(ListCareers);
