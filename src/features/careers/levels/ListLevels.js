import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Table, Row, Button, Divider } from 'antd';
import data from '../../../mock/levels';

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
}, {
  title: 'Categoria',
  dataIndex: 'category',
  key: 'category',
}];

/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
const ListLevels = ({ history }) => {
  return (
    <div>
      <Row type="flex" justify="end">
        <Button
          type="primary"
          onClick={() => { history.push('/levels/new'); }}>
            Novo Cargo/Nível
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

ListLevels.propTypes = {
  history: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default withRouter(ListLevels);
