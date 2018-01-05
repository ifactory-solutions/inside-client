import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Table, Row, Button, Divider } from 'antd';
import data from '../../mock/projects';

const columns = [{
  title: 'Nome',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Descrição',
  dataIndex: 'description',
  key: 'description',
}, {
  title: 'Data de Início',
  dataIndex: 'startDate',
  key: 'startDate',
}, {
  title: 'Data de Finalização',
  dataIndex: 'endDate',
  key: 'endDate',
}, {
  title: 'Stack',
  dataIndex: 'stack',
  key: 'stack',
}, {
  title: 'Status',
  dataIndex: 'status',
  key: 'status',
}];

/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
const ListProjects = ({ history }) => {
  return (
    <div>
      <Row type="flex" justify="end">
        <Button
          type="primary"
          onClick={() => { history.push('/projects/new'); }}>
            Novo Projeto
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

ListProjects.propTypes = {
  history: PropTypes.object, // eslint-disable-line
};

export default withRouter(ListProjects);
