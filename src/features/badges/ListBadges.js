import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Table, Row, Button, Divider } from 'antd';
import data from '../../mock/badges';

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
const ListBadges = ({ history }) => {
  return (
    <div>
      <Row type="flex" justify="end">
        <Button
          type="primary"
          onClick={() => { history.push('/badges/new'); }}>
            Nova Badge
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

ListBadges.propTypes = {
  history: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default withRouter(ListBadges);
